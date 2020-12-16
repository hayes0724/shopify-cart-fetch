import { CartState } from "./state";

class Cart {
  /**
   * Use the GET /cart.js endpoint to get the cart as JSON.
   * @return {Promise<CartState | string>}
   */
  public async get(): Promise<CartState | string> {
    return await fetch("/cart.js")
      .then((response) => response.json())
      .then((data) => data);
  }
}

export { Cart, CartState };
