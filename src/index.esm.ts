/**
 * Cart
 * ------------------------------------------------------------------------------
 * The default Cart class with all methods, events and state
 */

import CartEvents from "./lib/events";
import {
  addItem,
  addItemFromForm,
  clearAttributes,
  clearItems,
  clearNote,
  getAttributes,
  getNote,
  getState,
  removeItem,
  updateAttributes,
  updateItem,
  updateItemById,
  updateNote,
} from "./lib/functions";
import {
  CartItemParams,
  CartItemAdd,
  CartItemRemove,
  //CartItemUpdate,
  CartItemIndex,
  CartLineItem,
  CartState,
  EventType,
  LineItemKey,
  LineItemCallback,
  CartItemUpdate,
  CartItemUpdateById,
  Attributes,
  CartParams,
} from "./lib/types";

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
  get state(): CartState {
    return this._state;
  }

  set state(value: CartState) {
    this._state = value;
  }

  private _state?: CartState;

  private async run(
    type: EventType,
    callback: CallableFunction,
    data?: CartParams|CartItemParams
  ): Promise<CartState> {
    this.events.emit(type, "start");
    this.state = await callback(data);
    this.events.emit(type, "complete", this.state);
    return this.state;
  }

  private async runLine(
    type: EventType,
    callback: LineItemCallback,
    data?: CartItemParams | CartItemParams[]
  ): Promise<CartLineItem | CartLineItem[]> {
    this.events.emit(type, "start");
    const lineItem = await callback(data);
    const index = this.findItemIndex(lineItem.key);
    index > -1 && lineItem.quantity > 0
      ? (this.state.items[index] = lineItem)
      : this.state.items.push(lineItem);
    this.events.emit(type, "complete", this.state);
    return lineItem;
  }

  public events = new CartEvents();

  /**
   * Finds the the line item using it's line item key
   * @param {LineItemKey} key
   * @return {CartLineItem}
   */
  public findItem = (key: LineItemKey): CartLineItem =>
    this.state.items.find((item) => item.key === key);

  /**
   * Finds the index of the line item using it's line item key
   * @param {LineItemKey} key
   * @return {CartItemIndex}
   */
  public findItemIndex = (key: LineItemKey): CartItemIndex =>
    this.state.items.findIndex((item) => item.key === key);

  public getState = async (): Promise<CartState> =>
    this.run("cart-fetch", getState);

  public addItem = async (items: CartItemAdd[]): Promise<CartLineItem> =>
    this.runLine("cart-add", addItem, items);

  public addItemFromForm = async (
    productForm: HTMLFormElement
  ): Promise<CartLineItem> =>
    this.runLine("cart-add", addItemFromForm, productForm);

  public clearItems = async (): Promise<CartState> =>
    this.run("cart-update", clearItems);

  public removeItem = async (item: CartItemRemove): Promise<CartState> =>
    this.run("cart-remove", removeItem, item);

  public updateItem = async (item: CartItemUpdate): Promise<CartState> =>
    this.run("cart-update", updateItem, item);

  public updateItemById = async (
    item: CartItemUpdateById
  ): Promise<CartLineItem> => this.runLine("cart-update", updateItemById, item);

  public updateAttributes = async (
    attributes: Attributes
  ): Promise<CartState> =>
    this.run("cart-update", updateAttributes, attributes);

  public clearAttributes = async (): Promise<CartState> =>
    this.run("cart-update", clearAttributes);

  public getAttributes: () => Promise<CartState["attributes"]> = getAttributes;

  public getNote: () => Promise<CartState["note"]> = getNote;

  public updateNote = async (note: string): Promise<CartState> =>
    this.run("cart-update", updateNote, note);

  public clearNote = async (): Promise<CartState> =>
    this.run("cart-update", clearNote);
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
  clearNote
};

export type {
  CartItemParams,
  CartItemAdd,
  CartItemRemove,
  CartItemIndex,
  CartLineItem,
  CartState,
  EventType,
  LineItemKey,
  LineItemCallback,
  CartItemUpdate,
  CartItemUpdateById,
  Attributes,
  CartParams
};

