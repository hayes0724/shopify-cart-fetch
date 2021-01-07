/**
 * Cart
 * ------------------------------------------------------------------------------
 * The default Cart class with all methods, events and state
 */
import CartEvents from "./lib/events";
import { addItem, addItemFromForm, clearAttributes, clearItems, clearNote, getAttributes, getNote, getState, removeItem, updateAttributes, updateItem, updateItemById, updateNote, } from "./lib/functions";
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
    constructor() {
        this.events = new CartEvents();
        /**
         * Finds the the line item using it's line item key
         * @param {LineItemKey} key
         * @return {CartLineItem}
         */
        this.findItem = (key) => this.state.items.find((item) => item.key === key);
        /**
         * Finds the index of the line item using it's line item key
         * @param {LineItemKey} key
         * @return {CartItemIndex}
         */
        this.findItemIndex = (key) => this.state.items.findIndex((item) => item.key === key);
        this.getState = async () => this.run("cart-fetch", getState);
        this.addItem = async (items) => this.runLine("cart-add", addItem, items);
        this.addItemFromForm = async (productForm) => this.runLine("cart-add", addItemFromForm, productForm);
        this.clearItems = async () => this.run("cart-update", clearItems);
        this.removeItem = async (item) => this.run("cart-remove", removeItem, item);
        this.updateItem = async (item) => this.run("cart-update", updateItem, item);
        this.updateItemById = async (item) => this.runLine("cart-update", updateItemById, item);
        this.updateAttributes = async (attributes) => this.run("cart-update", updateAttributes, attributes);
        this.clearAttributes = async () => this.run("cart-update", clearAttributes);
        this.getAttributes = getAttributes;
        this.getNote = getNote;
        this.updateNote = async (note) => this.run("cart-update", updateNote, note);
        this.clearNote = async () => this.run("cart-update", clearNote);
    }
    get state() {
        return this._state;
    }
    set state(value) {
        this._state = value;
    }
    async run(type, callback, data) {
        this.events.emit(type, "start");
        this.state = await callback(data);
        this.events.emit(type, "complete", this.state);
        return this.state;
    }
    async runLine(type, callback, data) {
        this.events.emit(type, "start");
        const lineItem = await callback(data);
        const index = this.findItemIndex(lineItem.key);
        index > -1 && lineItem.quantity > 0
            ? (this.state.items[index] = lineItem)
            : this.state.items.push(lineItem);
        this.events.emit(type, "complete", this.state);
        return lineItem;
    }
}
export { addItem, getState, addItemFromForm, clearItems, removeItem, updateAttributes, updateItem, updateItemById, getAttributes, clearAttributes, getNote, updateNote, clearNote };
//# sourceMappingURL=index.esm.js.map