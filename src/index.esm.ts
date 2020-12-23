import {
  addItem,
  getState,
  addItemFromForm,
  clearItems,
  removeItem,
  updateAttributes,
  updateItem,
  updateItemById,
  getAttributes,
  clearAttributes,
  getNote,
  updateNote,
  clearNote,
} from "./lib/functions";
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
export class Cart {
  public state?: CartState;
  public getState = getState;
  public addItem = addItem;
  public addItemFromForm = addItemFromForm;
  public clearItems = clearItems;
  public removeItem = removeItem;
  public updateItem = updateItem;
  public updateItemById = updateItemById;
  public getAttributes = getAttributes;
  public updateAttributes = updateAttributes;
  public clearAttributes = clearAttributes;
  public getNote = getNote;
  public updateNote = updateNote;
  public clearNote = clearNote;
}

export {
  addItem,
  getState,
  addItemFromForm,
  clearItems,
  removeItem,
  updateAttributes,
  updateItem,
  updateItemById,
  getAttributes,
  clearAttributes,
  getNote,
  updateNote,
  clearNote,
}
