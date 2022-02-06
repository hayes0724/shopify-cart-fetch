import {
  CartState,
  Attributes,
  CartItemRemove,
  CartItemUpdate,
  CartItems,
  CartItemsResponse, CartLineItem
} from "./types";

export interface CartInterface {
  state: CartState
  getState(): Promise<CartState>
  addItem(items: CartItems): Promise<CartItemsResponse>
  addItemFromForm(productForm: HTMLFormElement): Promise<CartLineItem>
  clearItems(): Promise<CartState>
  updateItem(item: CartItemUpdate): Promise<CartState>
  removeItem(item: CartItemRemove): Promise<CartState>
  updateAttributes(attributes: Attributes): Promise<CartState>
  clearAttributes(): Promise<CartState>
  updateNote(note: string): Promise<CartState>
  clearNote(): Promise<CartState>
}
