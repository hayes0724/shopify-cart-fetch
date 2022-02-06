import { enableFetchMocks } from "jest-fetch-mock";
enableFetchMocks();

import { ShopifyCart } from "../src";
import {
  cartResponse,
  settings,
  singleItem,
  singleItemUpdate,
  storeUrl,
} from "./fixtures";

let cart: ShopifyCart;

const validate = () => {
  expect(cart.state).toEqual(cartResponse);
  expect(fetchMock.mock.calls.length).toEqual(1);
  expect(fetchMock.mock.calls[0][1]["body"]).toMatchSnapshot();
  expect(fetchMock.mock.calls[0][0]).toEqual(`${storeUrl}/cart/change.js`);
};

describe("Testing methods using the /cart/change.js endpoint", () => {
  beforeEach(() => {
    fetchMock.resetMocks();
    cart = new ShopifyCart(settings);
    fetchMock.mockResponseOnce(JSON.stringify(cartResponse));
  });

  it("updateItem calls fetch and updates state", async () => {
    await cart.updateItem(singleItemUpdate);
    validate();
  });

  it("removeItem calls fetch and updates state", async () => {
    await cart.removeItem(singleItem);
    validate();
  });
});
