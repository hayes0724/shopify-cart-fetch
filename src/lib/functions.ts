import {
  Attributes,
  CartItemAdd,
  CartItemRemove,
  CartItemUpdate,
  CartItemUpdateById,
  CartLineItem,
  CartState
} from "./types";
import {post} from "./api";

/**
 * Use the GET /cart.js endpoint to get the cart as JSON.
 * @see {@link https://shopify.dev/docs/themes/ajax-api/reference/cart#get-cart-js | ShopifyAPI: GET /cart.js }
 * @return {Promise<CartState>}
 */
export async function getState(): Promise<CartState> {
  return await fetch("/cart.js")
    .then((response) => response.json())
    .then((json) => json)
}

/**
 * Use the POST /cart/add.js endpoint to add product to cart.
 * @typedef {function} addItem
 * @see {@link https://shopify.dev/docs/themes/ajax-api/reference/cart#post-cart-add-js | ShopifyAPI: POST /cart/add.js}
 * @param {CartItemAdd[]} items
 * @return {Promise<CartLineItem[]>}
 */
export async function addItem(items: CartItemAdd[]): Promise<CartLineItem[]> {
  return await post("/cart/add.js", items)
}

/**
 * Adds an item to your cart from a product form. The form must contain an input with name="id".
 * If the quantity specified is more than what is available, the promise will be rejected and the cart state will remain unchanged
 * @param {HTMLFormElement} productForm
 * @return {Promise<CartLineItem>}
 * @see {@link https://shopify.dev/docs/themes/ajax-api/reference/cart#post-cart-add-js | ShopifyAPI: POST /cart/add.js}
 */
export async function addItemFromForm(
  productForm: HTMLFormElement
): Promise<CartLineItem> {
  const formData = new FormData(productForm);
  if (!formData.get("id")) {
    throw "Cart form missing required property ID";
  }
  return await post("/cart/add.js", formData);
}

/**
 * Use the POST /cart/clear.js endpoint to set all quantities of all line items in the cart to zero.
 * @see {@link https://shopify.dev/docs/themes/ajax-api/reference/cart#post-cart-clear-js | ShopifyAPI: POST /cart/clear.js}
 * @return {Promise<CartState>}
 */
export async function clearItems(): Promise<CartState> {
  return await post("/cart/clear.js");
}

/**
 * The /cart/change.js endpoint changes the quantity and properties object of a cart line item.
 * Only items already in your cart can be changed, and only one line item at a time can be changed.
 * @see {@link https://shopify.dev/docs/themes/ajax-api/reference/cart#post-cart-change-js | ShopifyAPI: POST /cart/change.js }
 * @param {CartItemUpdate} item
 * @return {Promise<CartState>}
 */
export async function updateItem(item: CartItemUpdate): Promise<CartState> {
  return await post("/cart/change.js", item);
}

/**
 * The /cart/change.js endpoint changes the quantity.
 * Only items already in your cart can be changed, and only one line item at a time can be changed.
 * @see {@link https://shopify.dev/docs/themes/ajax-api/reference/cart#post-cart-change-js | ShopifyAPI: POST /cart/change.js }
 * @param {CartItemUpdateById} item
 * @return {Promise<CartLineItem>}
 */
export async function updateItemById(
  item: CartItemUpdateById
): Promise<CartLineItem> {
  return await post("/cart/change.js", item);
}

/**
 * Removes an item from the cart using line item key or product id. Returns a promise which fulfills with the updated cart state.
 * @param {CartItemRemove} item
 * @see {@link https://shopify.dev/docs/themes/ajax-api/reference/cart#post-cart-change-js | ShopifyAPI: POST /cart/change.js }
 * @see {@link https://shopify.dev/docs/themes/liquid/reference/objects/line_item#line_item-key | ShopifyAPI: LineItemKey }
 * @return {Promise<CartState>}
 */
export async function removeItem(item: CartItemRemove): Promise<CartState> {
  return await post("/cart/change.js", { quantity: 0, ...item });
}

/**
 * Get the current cart state from Shopify and return the attributes
 * @return {Promise<CartState["attributes"]>}
 * @see {@link https://shopify.dev/docs/themes/liquid/reference/objects/cart#cart-attributes | ShopifyAPI: cart-attributes }
 */
export async function getAttributes(): Promise<CartState["attributes"]> {
  return getState().then((state) => state.attributes);
}

/**
 * Update cart attributes from Shopify and return the state
 * @param {Attributes} attributes
 * @return {Promise<CartState>}
 * @see {@link https://shopify.dev/docs/themes/liquid/reference/objects/cart#cart-attributes | ShopifyAPI: cart-attributes }
 */
export async function updateAttributes(
  attributes: Attributes
): Promise<CartState> {
  return await post("/cart/update.js", { attributes: { ...attributes } });
}

/**
 * Clear all cart attributes from Shopify and return the state
 * @return {Promise<CartState>}
 * @see {@link https://shopify.dev/docs/themes/liquid/reference/objects/cart#cart-attributes | ShopifyAPI: cart-attributes }
 */
export async function clearAttributes(): Promise<CartState> {
  return getState()
    .then((state) => state.attributes)
    .then((attributes) => {
      const clearList: Attributes = {};
      Object.getOwnPropertyNames(attributes).forEach(
        (prop) => (clearList[prop] = "")
      );
      return clearList;
    })
    .then((clearList) => post("/cart/update.js", { attributes: clearList }));
}

/**
 * Get the current cart state from Shopify and return the note
 * @return {Promise<CartState["note"]>}
 * @see {@link https://shopify.dev/docs/themes/liquid/reference/objects/cart#cart-note | ShopifyAPI: cart.note }
 */
export async function getNote(): Promise<CartState["note"]> {
  return getState().then((state) => state.note);
}

/**
 * Update or create the cart note
 * @param {string} note
 * @return {Promise<CartState>}
 * @see {@link https://shopify.dev/docs/themes/liquid/reference/objects/cart#cart-note | ShopifyAPI: cart.note }
 */
export async function updateNote(note: string): Promise<CartState> {
  return await post("/cart/update.js", { note: note });
}

/**
 * Remove the cart note
 * @return {Promise<CartState>}
 * @see {@link https://shopify.dev/docs/themes/liquid/reference/objects/cart#cart-note | ShopifyAPI: cart.note }
 */
export async function clearNote(): Promise<CartState> {
  return await post("/cart/update.js", { note: "" });
}
