import {CartInterface} from "./lib/cart-interface";
import {
  Attributes, CartEvents,
  CartItemRemove,
  CartItems,
  CartItemsResponse, CartItemUpdate,
  CartLineItem, CartRoute,
  CartSettings,
  CartState, ShopifyResponse
} from "./lib/types";
import {InventoryError, VariantError} from "./lib/errors";

export class ShopifyCart implements CartInterface {
  private _state: CartState;
  private readonly _settings: CartSettings = {
    url: '',
    postConfig: {
      method: 'POST',
      credentials: 'same-origin',
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/json;',
      },
    },
    updateState: true,
  };

  constructor(settings: CartSettings) {
    this._settings = { ...this._settings, ...settings };
    this.cartEvent('cart:ready');
  }

  get state(): CartState {
    return this._state;
  }

  get settings(): CartSettings {
    return this._settings;
  }

  /**
   * Use the GET /cart.js endpoint to get the cart as JSON.
   * @see {@link https://shopify.dev/docs/themes/ajax-api/reference/cart#get-cart-js | ShopifyAPI: GET /cart.js }
   */
  public async getState(): Promise<CartState> {
    this.cartEvent('cart:requestStarted', '/cart.js');
    const response = await fetch(`${this._settings.url}/cart.js`);
    this._state = await response.json();
    this.cartEvent('cart:requestComplete', '/cart.js');
    return this._state;
  }

  /**
   * Use the POST /cart/add.js endpoint to add product to cart.
   * @see {@link https://shopify.dev/docs/themes/ajax-api/reference/cart#post-cart-add-js | ShopifyAPI: POST /cart/add.js}
   */
  public async addItem(items: CartItems): Promise<CartItemsResponse> {
    const data = Array.isArray(items) ? items : [items];
    const response = await this.post('/cart/add.js', JSON.stringify({ items: data }));
    if (this._settings.updateState) {
      await this.getState();
    }
    return response as CartItemsResponse;
  }

  /**
   * Adds an item to your cart from a product form. The form must contain an input with name="id".
   * If the quantity specified is more than what is available, the promise will be rejected and the cart state will remain unchanged
   * @see {@link https://shopify.dev/docs/themes/ajax-api/reference/cart#post-cart-add-js | ShopifyAPI: POST /cart/add.js}
   */
  public async addItemFromForm(productForm: HTMLFormElement): Promise<CartLineItem> {
    const formData = new FormData(productForm);
    if (!formData.get('id')) {
      throw 'Cart form missing required property ID';
    }
    const formJson = JSON.stringify(Object.fromEntries(formData.entries()));
    const response = await this.post('/cart/add.js', formJson);
    if (this._settings.updateState) {
      await this.getState();
    }
    return response as CartLineItem;
  }

  /**
   * Clear all cart attributes from Shopify and return the state
   * @see {@link https://shopify.dev/api/ajax/reference/cart#post-cart-update-js | ShopifyAPI: POST /cart/update.js}
   * @see {@link https://shopify.dev/docs/themes/liquid/reference/objects/cart#cart-attributes | ShopifyAPI: cart-attributes }
   */
  public async clearAttributes(): Promise<CartState> {
    const state = await this.getState();
    const data = JSON.stringify({
      attributes: this.clearProps(state.attributes),
    });
    return await this.post('/cart/update.js', data);
  }

  /**
   * Use the POST /cart/clear.js endpoint to set all quantities of all line items in the cart to zero.
   * @see {@link https://shopify.dev/docs/themes/ajax-api/reference/cart#post-cart-clear-js | ShopifyAPI: POST /cart/clear.js}
   */
  public async clearItems(): Promise<CartState> {
    return await this.post('/cart/clear.js');
  }

  /**
   * Remove the cart note
   * @see {@link https://shopify.dev/docs/themes/liquid/reference/objects/cart#cart-note | ShopifyAPI: cart.note }
   */
  public async clearNote(): Promise<CartState> {
    return await this.post('/cart/update.js', JSON.stringify({ note: '' }));
  }

  /**
   * Removes an item from the cart using line item key or product id. Returns a promise which fulfills with the updated cart state.
   * @see {@link https://shopify.dev/docs/themes/ajax-api/reference/cart#post-cart-change-js | ShopifyAPI: POST /cart/change.js }
   */
  public async removeItem(item: CartItemRemove): Promise<CartState> {
    return await this.post('/cart/change.js', JSON.stringify({ quantity: 0, ...item }));
  }

  /**
   * Update cart attributes from Shopify and return the state
   * @see {@link https://shopify.dev/docs/themes/liquid/reference/objects/cart#cart-attributes | ShopifyAPI: cart-attributes }
   */
  public async updateAttributes(attributes: Attributes): Promise<CartState> {
    return await this.post('/cart/update.js', JSON.stringify({ attributes: { ...attributes } }));
  }

  /**
   * The /cart/change.js endpoint changes the quantity and properties object of a cart line item.
   * Only items already in your cart can be changed, and only one line item at a time can be changed.
   * @see {@link https://shopify.dev/docs/themes/ajax-api/reference/cart#post-cart-change-js | ShopifyAPI: POST /cart/change.js }
   */
  public async updateItem(item: CartItemUpdate): Promise<CartState> {
    return await this.post('/cart/change.js', JSON.stringify(item));
  }

  /**
   * Update or create the cart note
   * @see {@link https://shopify.dev/docs/themes/liquid/reference/objects/cart#cart-note | ShopifyAPI: cart.note }
   */
  public async updateNote(note: string): Promise<CartState> {
    return await this.post('/cart/update.js', JSON.stringify({ note: note }));
  }

  protected async post<Return>(route: CartRoute, data?: BodyInit): Promise<Return> {
    const url = this._settings.url + route;
    const postConfig = this._settings.postConfig;
    if (data) {
      postConfig.body = data;
    }
    this.cartEvent('cart:requestStarted', route);
    const request = await fetch(url, postConfig);
    const response = await request.json();
    this.checkResponse(response);
    this.cartEvent('cart:requestComplete', route);
    return response;
  }

  protected checkResponse(response: ShopifyResponse): void {
    if (response['status'] === 404) {
      throw new VariantError();
    }
    if (response['status'] === 422) {
      throw new InventoryError(response['description']);
    }
    if (response['token']) {
      this._state = response as CartState;
    }
  }

  protected clearProps(target: Record<string, unknown>): { [key: string]: '' } {
    const clearList = {};
    Object.getOwnPropertyNames(target).forEach((prop) => (clearList[prop] = ''));
    return clearList;
  }

  protected cartEvent(name: CartEvents, route?: CartRoute): void {
    document.dispatchEvent(
      new CustomEvent(name, {
        detail: {
          cart: this,
          route: route,
        },
        bubbles: true,
        cancelable: true,
        composed: false,
      })
    );
  }
}
