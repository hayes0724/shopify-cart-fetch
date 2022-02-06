import "dotenv/config";
import { CartSettings } from "../../src/lib/types";

const variantId = process.env.VARIANT_ID || "39766656254012";
const variantId2 = process.env.VARIANT_ID_2 || "39766655926332";
export const storeUrl = process.env.STORE_URL || "https://shopify.com";

export const settings: CartSettings = {
  url: storeUrl,
  postConfig: {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "X-Requested-With": "XMLHttpRequest",
      "Content-Type": "application/json;",
    },
  },
  updateState: true,
};

export const settingsNoUpdate: CartSettings = {
  ...settings,
  ...{ updateState: false },
};

export const updateAttributesInput = {
  attribute: "value",
  "gift wrap": "true",
};

export const singleItem = {
  id: variantId,
};

export const singleItemUpdate = {
  id: variantId,
  quantity: 2
};

export const multipleItems = [{ id: variantId }, { id: variantId2 }];

export const validForm = `
    <form>
      <input type="hidden" name="id" value="${variantId}">
      <input type="hidden" name="quantity" value="1">
    </form>`;

export const invalidForm = `
    <form>
      <input type="hidden" name="quantity" value="1">
    </form>`;
