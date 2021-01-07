/**
 * Cart API helper methods
 * ------------------------------------------------------------------------------
 * Reusable code for cart API methods
 *
 */

import { CartRoute } from "./types";

/**
 * Creates the default config for post requests
 * @return {JSON}
 */
function defaultRequestConfig() {
  return JSON.parse(
    JSON.stringify({
      method: "POST",
      credentials: 'same-origin',
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/json;'
      }
    })
  );
}

/**
 * The default method for fetching JSON
 * @param {string} route
 * @param {Data?} data
 * @return {Promise<Resolve>}
 */

async function post<Data, Return>(route: CartRoute, data?: Data): Promise<Return> {
  const config = {
    ...defaultRequestConfig()
  }
  if (data) {
    config.body = JSON.stringify(data)
  }
  return await fetch(route, {...config})
    .then((response) => response.json())
    .then((json) => {
      if (json.message) {
        throw json
      }
      return json
    })

}

export {
  post
}
