import { CartState } from "./state";
declare class Cart {
    /**
     * Use the GET /cart.js endpoint to get the cart as JSON.
     * @return {Promise<CartState | string>}
     */
    get(): Promise<CartState | string>;
}
export { Cart, CartState };
