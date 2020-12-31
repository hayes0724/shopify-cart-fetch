/**
 * Cart
 * ------------------------------------------------------------------------------
 * The default Cart class with all methods, events and state
 */
import CartEvents from "./lib/events";
import { addItem, addItemFromForm, clearAttributes, clearItems, clearNote, getAttributes, getNote, getState, removeItem, updateAttributes, updateItem, updateItemById, updateNote } from "./lib/functions";
import { CartItemAdd, CartItemRemove, CartItemIndex, CartLineItem, CartState, LineItemKey, CartItemUpdate, CartItemUpdateById, Attributes } from "./lib/types";
/**
 * This class implements all methods from functions.ts, uses events.ts for cart events and maintains cart state.
 * You can also import the functions individually or create your own cart class.
 *
 * @example
 * import Cart from '@hayes0724/shopify-cart-fetch';
 * const shopifyCart = new Cart();
 * shopifyCart.getState().then(state => console.log(state))
 * @example
 * import {getState, removeItem, updateItem, addItem, clearItems} from '@hayes0724/shopify-cart-fetch'
 * getState().then(state => console.log(state))
 *
 */
export default class Cart {
    get state(): CartState;
    set state(value: CartState);
    private _state?;
    private run;
    private runLine;
    events: CartEvents;
    /**
     * Finds the the line item using it's line item key
     * @param {LineItemKey} key
     * @return {CartLineItem}
     */
    findItem: (key: LineItemKey) => CartLineItem;
    /**
     * Finds the index of the line item using it's line item key
     * @param {LineItemKey} key
     * @return {CartItemIndex}
     */
    findItemIndex: (key: LineItemKey) => CartItemIndex;
    getState: () => Promise<CartState>;
    addItem: (items: CartItemAdd) => Promise<CartLineItem>;
    addItemFromForm: (productForm: HTMLFormElement) => Promise<CartLineItem>;
    clearItems: () => Promise<CartState>;
    removeItem: (item: CartItemRemove) => Promise<CartLineItem>;
    updateItem: (item: CartItemUpdate) => Promise<CartLineItem>;
    updateItemById: (item: CartItemUpdateById) => Promise<CartLineItem>;
    updateAttributes: (attributes: Attributes) => Promise<CartState>;
    clearAttributes: () => Promise<CartState>;
    getAttributes: () => Promise<CartState["attributes"]>;
    getNote: () => Promise<CartState["note"]>;
    updateNote: (note: string) => Promise<CartState>;
    clearNote: () => Promise<CartState>;
}
export { addItem, getState, addItemFromForm, clearItems, removeItem, updateAttributes, updateItem, updateItemById, getAttributes, clearAttributes, getNote, updateNote, clearNote, };
//# sourceMappingURL=index.esm.d.ts.map