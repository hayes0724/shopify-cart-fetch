import { Attributes, CartItemAdd, CartItemRemove, CartItemUpdate, CartItemUpdateById, CartLineItem, CartState } from "./types";
/**
 * Use the GET /cart.js endpoint to get the cart as JSON.
 * @see {@link https://shopify.dev/docs/themes/ajax-api/reference/cart#get-cart-js | ShopifyAPI: GET /cart.js }
 * @return {Promise<CartState>}
 */
export declare function getState(): Promise<CartState>;
/**
 * Use the POST /cart/add.js endpoint to add product to cart.
 * @typedef {function} addItem
 * @see {@link https://shopify.dev/docs/themes/ajax-api/reference/cart#post-cart-add-js | ShopifyAPI: POST /cart/add.js}
 * @param {CartItemAdd} items
 * @return {Promise<CartLineItem>}
 */
export declare function addItem(items: CartItemAdd): Promise<CartLineItem>;
/**
 * Adds an item to your cart from a product form. The form must contain an input with name="id".
 * If the quantity specified is more than what is available, the promise will be rejected and the cart state will remain unchanged
 * @param {HTMLFormElement} productForm
 * @return {Promise<CartLineItem>}
 * @see {@link https://shopify.dev/docs/themes/ajax-api/reference/cart#post-cart-add-js | ShopifyAPI: POST /cart/add.js}
 */
export declare function addItemFromForm(productForm: HTMLFormElement): Promise<CartLineItem>;
/**
 * Use the POST /cart/clear.js endpoint to set all quantities of all line items in the cart to zero.
 * @see {@link https://shopify.dev/docs/themes/ajax-api/reference/cart#post-cart-clear-js | ShopifyAPI: POST /cart/clear.js}
 * @return {Promise<CartState>}
 */
export declare function clearItems(): Promise<CartState>;
/**
 * The /cart/change.js endpoint changes the quantity and properties object of a cart line item.
 * Only items already in your cart can be changed, and only one line item at a time can be changed.
 * @see {@link https://shopify.dev/docs/themes/ajax-api/reference/cart#post-cart-change-js | ShopifyAPI: POST /cart/change.js }
 * @param {CartItemUpdate} item
 * @return {Promise<CartLineItem>}
 */
export declare function updateItem(item: CartItemUpdate): Promise<CartLineItem>;
/**
 * The /cart/change.js endpoint changes the quantity.
 * Only items already in your cart can be changed, and only one line item at a time can be changed.
 * @see {@link https://shopify.dev/docs/themes/ajax-api/reference/cart#post-cart-change-js | ShopifyAPI: POST /cart/change.js }
 * @param {CartItemUpdateById} item
 * @return {Promise<CartLineItem>}
 */
export declare function updateItemById(item: CartItemUpdateById): Promise<CartLineItem>;
/**
 * Removes an item from the cart using line item key or product id. Returns a promise which fulfills with the updated cart state.
 * @param {CartItemRemove} item
 * @see {@link https://shopify.dev/docs/themes/ajax-api/reference/cart#post-cart-change-js | ShopifyAPI: POST /cart/change.js }
 * @see {@link https://shopify.dev/docs/themes/liquid/reference/objects/line_item#line_item-key | ShopifyAPI: LineItemKey }
 * @return {Promise<CartLineItem>}
 */
export declare function removeItem(item: CartItemRemove): Promise<CartLineItem>;
/**
 * Get the current cart state from Shopify and return the attributes
 * @return {Promise<CartState["attributes"]>}
 * @see {@link https://shopify.dev/docs/themes/liquid/reference/objects/cart#cart-attributes | ShopifyAPI: cart-attributes }
 */
export declare function getAttributes(): Promise<CartState["attributes"]>;
/**
 * Update cart attributes from Shopify and return the state
 * @param {Attributes} attributes
 * @return {Promise<CartState>}
 * @see {@link https://shopify.dev/docs/themes/liquid/reference/objects/cart#cart-attributes | ShopifyAPI: cart-attributes }
 */
export declare function updateAttributes(attributes: Attributes): Promise<CartState>;
/**
 * Clear all cart attributes from Shopify and return the state
 * @return {Promise<CartState>}
 * @see {@link https://shopify.dev/docs/themes/liquid/reference/objects/cart#cart-attributes | ShopifyAPI: cart-attributes }
 */
export declare function clearAttributes(): Promise<CartState>;
/**
 * Get the current cart state from Shopify and return the note
 * @return {Promise<CartState["note"]>}
 * @see {@link https://shopify.dev/docs/themes/liquid/reference/objects/cart#cart-note | ShopifyAPI: cart.note }
 */
export declare function getNote(): Promise<CartState["note"]>;
/**
 * Update or create the cart note
 * @param {string} note
 * @return {Promise<CartState>}
 * @see {@link https://shopify.dev/docs/themes/liquid/reference/objects/cart#cart-note | ShopifyAPI: cart.note }
 */
export declare function updateNote(note: string): Promise<CartState>;
/**
 * Remove the cart note
 * @return {Promise<CartState>}
 * @see {@link https://shopify.dev/docs/themes/liquid/reference/objects/cart#cart-note | ShopifyAPI: cart.note }
 */
export declare function clearNote(): Promise<CartState>;
//# sourceMappingURL=functions.d.ts.map