import "jest-fetch-mock";
import { ShopifyCart } from "../src";
import {
  cartProperties,
  lineItemProperties,
  storeUrl,
  singleItem,
  multipleItems,
  validForm,
} from "./fixtures";

let cart: ShopifyCart;

describe("Testing the shopify cart public api methods", () => {
  beforeEach(() => {
    cart = new ShopifyCart({ url: storeUrl });
    cart.clearItems();
  });

  it("getState returns a response with cart state properties", async () => {
    const response = await cart.getState();
    expect(Object.getOwnPropertyNames(response)).toEqual(
      expect.arrayContaining(cartProperties)
    );
  });

  it("addItem with single item returns a response with the product", async () => {
    const response = await cart.addItem(singleItem);
    expect(Object.getOwnPropertyNames(response.items[0])).toEqual(
      expect.arrayContaining(lineItemProperties)
    );
  });

  it("addItem with multiple items array returns a response with the product", async () => {
    const response = await cart.addItem(multipleItems);
    expect(Object.getOwnPropertyNames(response.items[0])).toEqual(
      expect.arrayContaining(lineItemProperties)
    );
  });

  it("addItemFromForm returns a response with the product", async () => {
    document.body.innerHTML = validForm;
    const form = document.querySelector("form");
    const response = await cart.addItemFromForm(form);
    expect(Object.getOwnPropertyNames(response)).toEqual(
      expect.arrayContaining(lineItemProperties)
    );
  });
});
