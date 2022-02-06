import { enableFetchMocks } from "jest-fetch-mock";
enableFetchMocks();

import { ShopifyCart } from "../src";
import { cartEmptyResponse, settings, storeUrl } from "./fixtures";

let cart: ShopifyCart;

describe("Testing methods using the /cart/clear.js endpoint", () => {
  beforeEach(() => {
    fetchMock.resetMocks();
    cart = new ShopifyCart(settings);
    fetchMock.mockResponseOnce(JSON.stringify(cartEmptyResponse));
  });

  it("clearItems calls fetch and the correct default url", async () => {
    await expect(cart.clearItems()).resolves.toEqual(cartEmptyResponse);
    expect(cart.state).toEqual(cartEmptyResponse);
    expect(fetchMock.mock.calls.length).toEqual(1);
    expect(fetchMock.mock.calls[0][0]).toEqual(`${storeUrl}/cart/clear.js`);
  });
});
