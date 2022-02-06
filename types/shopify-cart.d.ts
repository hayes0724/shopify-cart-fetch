import { CartInterface } from "./lib/cart-interface";
import { Attributes, CartEvents, CartItemRemove, CartItems, CartItemsResponse, CartItemUpdate, CartLineItem, CartRoute, CartSettings, CartState, ShopifyResponse } from "./lib/types";
export declare class ShopifyCart implements CartInterface {
    private _state;
    private readonly _settings;
    constructor(settings: CartSettings);
    get state(): CartState;
    get settings(): CartSettings;
    /**
     * Use the GET /cart.js endpoint to get the cart as JSON.
     * @see {@link https://shopify.dev/docs/themes/ajax-api/reference/cart#get-cart-js | ShopifyAPI: GET /cart.js }
     */
    getState(): Promise<CartState>;
    /**
     * Use the POST /cart/add.js endpoint to add product to cart.
     * @see {@link https://shopify.dev/docs/themes/ajax-api/reference/cart#post-cart-add-js | ShopifyAPI: POST /cart/add.js}
     */
    addItem(items: CartItems): Promise<CartItemsResponse>;
    /**
     * Adds an item to your cart from a product form. The form must contain an input with name="id".
     * If the quantity specified is more than what is available, the promise will be rejected and the cart state will remain unchanged
     * @see {@link https://shopify.dev/docs/themes/ajax-api/reference/cart#post-cart-add-js | ShopifyAPI: POST /cart/add.js}
     */
    addItemFromForm(productForm: HTMLFormElement): Promise<CartLineItem>;
    /**
     * Clear all cart attributes from Shopify and return the state
     * @see {@link https://shopify.dev/api/ajax/reference/cart#post-cart-update-js | ShopifyAPI: POST /cart/update.js}
     * @see {@link https://shopify.dev/docs/themes/liquid/reference/objects/cart#cart-attributes | ShopifyAPI: cart-attributes }
     */
    clearAttributes(): Promise<CartState>;
    /**
     * Use the POST /cart/clear.js endpoint to set all quantities of all line items in the cart to zero.
     * @see {@link https://shopify.dev/docs/themes/ajax-api/reference/cart#post-cart-clear-js | ShopifyAPI: POST /cart/clear.js}
     */
    clearItems(): Promise<CartState>;
    /**
     * Remove the cart note
     * @see {@link https://shopify.dev/docs/themes/liquid/reference/objects/cart#cart-note | ShopifyAPI: cart.note }
     */
    clearNote(): Promise<CartState>;
    /**
     * Removes an item from the cart using line item key or product id. Returns a promise which fulfills with the updated cart state.
     * @see {@link https://shopify.dev/docs/themes/ajax-api/reference/cart#post-cart-change-js | ShopifyAPI: POST /cart/change.js }
     */
    removeItem(item: CartItemRemove): Promise<CartState>;
    /**
     * Update cart attributes from Shopify and return the state
     * @see {@link https://shopify.dev/docs/themes/liquid/reference/objects/cart#cart-attributes | ShopifyAPI: cart-attributes }
     */
    updateAttributes(attributes: Attributes): Promise<CartState>;
    /**
     * The /cart/change.js endpoint changes the quantity and properties object of a cart line item.
     * Only items already in your cart can be changed, and only one line item at a time can be changed.
     * @see {@link https://shopify.dev/docs/themes/ajax-api/reference/cart#post-cart-change-js | ShopifyAPI: POST /cart/change.js }
     */
    updateItem(item: CartItemUpdate): Promise<CartState>;
    /**
     * Update or create the cart note
     * @see {@link https://shopify.dev/docs/themes/liquid/reference/objects/cart#cart-note | ShopifyAPI: cart.note }
     */
    updateNote(note: string): Promise<CartState>;
    protected post<Return>(route: CartRoute, data?: BodyInit): Promise<Return>;
    protected checkResponse(response: ShopifyResponse): void;
    protected clearProps(target: Record<string, unknown>): {
        [key: string]: '';
    };
    protected cartEvent(name: CartEvents, route?: CartRoute): void;
}
//# sourceMappingURL=shopify-cart.d.ts.map