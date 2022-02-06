import { enableFetchMocks } from "jest-fetch-mock";
enableFetchMocks();
import { ShopifyCart } from "../src";
import { storeUrl, cartResponse } from "./fixtures";

let cart: ShopifyCart;

const validate = (response) => {
  expect(cart.state).toEqual(response);
  expect(fetchMock).toBeCalled();
  expect(fetchMock.mock.calls[0][0]).toEqual(`${cart.settings.url}/cart.js`);
};

describe("Testing methods using the /cart.js endpoint", () => {
  beforeEach(() => {
    fetchMock.resetMocks();
    cart = new ShopifyCart({ url: storeUrl });
    fetchMock.mockResponseOnce(JSON.stringify(cartResponse));
  });

  it("getState calls fetch with no url setting specified", async () => {
    cart = new ShopifyCart({ url: "" });
    const response = await cart.getState();
    validate(response);
  });

  it("getState calls fetch and the correct custom url", async () => {
    const response = await cart.getState();
    validate(response);
  });
});
