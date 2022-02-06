import { enableFetchMocks } from "jest-fetch-mock";
enableFetchMocks();

import { ShopifyCart } from "../src";
import {
  cartResponse,
  singleItem,
  validForm,
  settings,
  settingsNoUpdate,
  invalidForm,
  multipleItems,
  lineItemResponse,
  inventoryErrorResponse,
  variantErrorResponse,
} from "./fixtures";
import { InventoryError, VariantError } from "../src/lib/errors";

let cart: ShopifyCart;

const verifyResults = (response) => {
  expect(response).toEqual(lineItemResponse);
  expect(cart.state).toEqual(cartResponse);
  expect(fetchMock.mock.calls.length).toEqual(2);
  expect(fetchMock.mock.calls[0][1]["body"]).toMatchSnapshot();
  expect(fetchMock.mock.calls[0][0]).toEqual(`${cart.settings.url}/cart/add.js`);
  expect(fetchMock.mock.calls[1][0]).toEqual(`${cart.settings.url}/cart.js`);
};

const verifyResultsNoUpdate = (response) => {
  expect(response).toEqual(lineItemResponse);
  expect(cart.state).toBeUndefined();
  expect(fetchMock.mock.calls.length).toEqual(1);
  expect(fetchMock.mock.calls[0][1]["body"]).toMatchSnapshot();
  expect(fetchMock.mock.calls[0][0]).toEqual(`${cart.settings.url}/cart/add.js`);
};

describe("Testing methods using the /cart/add.js endpoint and default settings ", () => {
  beforeEach(() => {
    fetchMock.resetMocks();
    cart = new ShopifyCart(settings);
    fetchMock
      .once(JSON.stringify(lineItemResponse))
      .once(JSON.stringify(cartResponse));
  });

  it("addItem calls fetch and updates state", async () => {
    const response = await cart.addItem(singleItem)
    verifyResults(response);
  });

  it("addItem with multiple items calls fetch and updates state", async () => {
    const response = await cart.addItem(multipleItems)
    verifyResults(response);
  });

  it("addItemFromForm calls fetch and updates state", async () => {
    document.body.innerHTML = validForm;
    const form = document.querySelector("form");
    const response = await cart.addItemFromForm(form)
    verifyResults(response);
  });

  it("addItemFromForm throws error when missing id", async () => {
    document.body.innerHTML = invalidForm;
    const form = document.querySelector("form");
    await expect(cart.addItemFromForm(form)).rejects.toMatch(
      "Cart form missing required property ID"
    );
  });
});

describe("Testing methods using the /cart/add.js endpoint without updating state", () => {
  beforeEach(() => {
    fetchMock.resetMocks();
    cart = new ShopifyCart(settingsNoUpdate);
    fetchMock.mockResponseOnce(JSON.stringify(lineItemResponse));
  });

  it("addItem calls fetch without updating state", async () => {
    const response = await cart.addItem(singleItem)
    verifyResultsNoUpdate(response);
  });

  it("addItemFromForm calls fetch without updating state", async () => {
    document.body.innerHTML = validForm;
    const form = document.querySelector("form");
    const response = await cart.addItemFromForm(form)
    verifyResultsNoUpdate(response);
  });
});

describe("Testing API errors using the /cart/add.js endpoint", () => {
  beforeEach(() => {
    fetchMock.resetMocks();
    cart = new ShopifyCart(settings);
  });

  it("addItem calls fetch and throws inventory error", async () => {
    fetchMock.mockResponseOnce(JSON.stringify(inventoryErrorResponse));
    await expect(async () => {
      await cart.addItem(singleItem);
    }).rejects.toBeInstanceOf(InventoryError);
    expect(cart.state).toBeUndefined();
  });

  it("addItem calls fetch and throws variant error", async () => {
    fetchMock.mockResponseOnce(JSON.stringify(variantErrorResponse));
    await expect(async () => {
      await cart.addItem(singleItem);
    }).rejects.toBeInstanceOf(VariantError);
    expect(cart.state).toBeUndefined();
  });
});
