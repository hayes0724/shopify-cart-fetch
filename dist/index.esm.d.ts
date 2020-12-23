import { addItem, getState, addItemFromForm, clearItems, removeItem, updateAttributes, updateItem, updateItemById, getAttributes, clearAttributes, getNote, updateNote, clearNote } from "./lib/functions";
import { CartState } from "./lib/types";
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
export declare class Cart {
    state?: CartState;
    getState: typeof getState;
    addItem: typeof addItem;
    addItemFromForm: typeof addItemFromForm;
    clearItems: typeof clearItems;
    removeItem: typeof removeItem;
    updateItem: typeof updateItem;
    updateItemById: typeof updateItemById;
    getAttributes: typeof getAttributes;
    updateAttributes: typeof updateAttributes;
    clearAttributes: typeof clearAttributes;
    getNote: typeof getNote;
    updateNote: typeof updateNote;
    clearNote: typeof clearNote;
}
export { addItem, getState, addItemFromForm, clearItems, removeItem, updateAttributes, updateItem, updateItemById, getAttributes, clearAttributes, getNote, updateNote, clearNote, };
//# sourceMappingURL=index.esm.d.ts.map