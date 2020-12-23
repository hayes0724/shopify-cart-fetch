import { addItem, getState, addItemFromForm, clearItems, removeItem, updateAttributes, updateItem, updateItemById, getAttributes, clearAttributes, getNote, updateNote, clearNote, } from "./lib/functions";
/**
 * Cart API
 * ------------------------------------------------------------------------------
 * The Cart class with all methods. You can also import the functions individually
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
export class Cart {
    constructor() {
        this.getState = getState;
        this.addItem = addItem;
        this.addItemFromForm = addItemFromForm;
        this.clearItems = clearItems;
        this.removeItem = removeItem;
        this.updateItem = updateItem;
        this.updateItemById = updateItemById;
        this.getAttributes = getAttributes;
        this.updateAttributes = updateAttributes;
        this.clearAttributes = clearAttributes;
        this.getNote = getNote;
        this.updateNote = updateNote;
        this.clearNote = clearNote;
    }
}
export { addItem, getState, addItemFromForm, clearItems, removeItem, updateAttributes, updateItem, updateItemById, getAttributes, clearAttributes, getNote, updateNote, clearNote, };
//# sourceMappingURL=index.esm.js.map