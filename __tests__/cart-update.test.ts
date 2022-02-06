import { enableFetchMocks } from "jest-fetch-mock";
enableFetchMocks();

import { ShopifyCart } from "../src";
import {
  cartResponse,
  settings,
  updateAttributesInput,
} from "./fixtures";

let cart: ShopifyCart;

const validate = (response) => {
  expect(cart.state).toEqual(response);
  expect(fetchMock.mock.calls.length).toEqual(1);
  expect(fetchMock.mock.calls[0][1]["body"]).toMatchSnapshot();
  expect(fetchMock.mock.calls[0][0]).toEqual(`${cart.settings.url}/cart/update.js`);
};

describe("Testing methods using the /cart/update.js endpoint", () => {
  beforeEach(() => {
    fetchMock.resetMocks();
    cart = new ShopifyCart(settings);
    fetchMock.mockResponse(JSON.stringify(cartResponse));
  });

  it("updateAttributes calls fetch and the correct default url", async () => {
    const response = await cart.updateAttributes(updateAttributesInput);
    validate(response);
  });

  it("clearAttributes calls fetch and the correct default url", async () => {
    const response = await cart.clearAttributes();
    expect(cart.state).toEqual(response);
    expect(fetchMock.mock.calls.length).toEqual(2);
    expect(fetchMock.mock.calls[0][0]).toEqual(`${cart.settings.url}/cart.js`);
    expect(fetchMock.mock.calls[1][0]).toEqual(`${cart.settings.url}/cart/update.js`);
    expect(fetchMock.mock.calls[1][1]["body"]).toMatchSnapshot();
  });

  it("updateNote calls fetch and the correct default url", async () => {
    const response = await cart.updateNote("note");
    validate(response);
  });

  it("clearNote calls fetch and the correct default url", async () => {
    const response = await cart.clearNote();
    validate(response);
  });
});
