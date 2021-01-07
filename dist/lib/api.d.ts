/**
 * Cart API helper methods
 * ------------------------------------------------------------------------------
 * Reusable code for cart API methods
 *
 */
import { CartRoute } from "./types";
/**
 * The default method for fetching JSON
 * @param {string} route
 * @param {Data?} data
 * @return {Promise<Resolve>}
 */
declare function post<Data, Return>(route: CartRoute, data?: Data): Promise<Return>;
export { post };
//# sourceMappingURL=api.d.ts.map