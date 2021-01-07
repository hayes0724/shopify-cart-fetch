/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
define(() => /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.esm.ts":
/*!**************************!*\
  !*** ./src/index.esm.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ Cart,\n/* harmony export */   \"addItem\": () => /* reexport safe */ _lib_functions__WEBPACK_IMPORTED_MODULE_1__.addItem,\n/* harmony export */   \"getState\": () => /* reexport safe */ _lib_functions__WEBPACK_IMPORTED_MODULE_1__.getState,\n/* harmony export */   \"addItemFromForm\": () => /* reexport safe */ _lib_functions__WEBPACK_IMPORTED_MODULE_1__.addItemFromForm,\n/* harmony export */   \"clearItems\": () => /* reexport safe */ _lib_functions__WEBPACK_IMPORTED_MODULE_1__.clearItems,\n/* harmony export */   \"removeItem\": () => /* reexport safe */ _lib_functions__WEBPACK_IMPORTED_MODULE_1__.removeItem,\n/* harmony export */   \"updateAttributes\": () => /* reexport safe */ _lib_functions__WEBPACK_IMPORTED_MODULE_1__.updateAttributes,\n/* harmony export */   \"updateItem\": () => /* reexport safe */ _lib_functions__WEBPACK_IMPORTED_MODULE_1__.updateItem,\n/* harmony export */   \"updateItemById\": () => /* reexport safe */ _lib_functions__WEBPACK_IMPORTED_MODULE_1__.updateItemById,\n/* harmony export */   \"getAttributes\": () => /* reexport safe */ _lib_functions__WEBPACK_IMPORTED_MODULE_1__.getAttributes,\n/* harmony export */   \"clearAttributes\": () => /* reexport safe */ _lib_functions__WEBPACK_IMPORTED_MODULE_1__.clearAttributes,\n/* harmony export */   \"getNote\": () => /* reexport safe */ _lib_functions__WEBPACK_IMPORTED_MODULE_1__.getNote,\n/* harmony export */   \"updateNote\": () => /* reexport safe */ _lib_functions__WEBPACK_IMPORTED_MODULE_1__.updateNote,\n/* harmony export */   \"clearNote\": () => /* reexport safe */ _lib_functions__WEBPACK_IMPORTED_MODULE_1__.clearNote\n/* harmony export */ });\n/* harmony import */ var _lib_events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/events */ \"./src/lib/events.ts\");\n/* harmony import */ var _lib_functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/functions */ \"./src/lib/functions.ts\");\n/**\r\n * Cart\r\n * ------------------------------------------------------------------------------\r\n * The default Cart class with all methods, events and state\r\n */\r\n\r\n\r\n/**\r\n * This class implements all methods from functions.ts, uses events.ts for cart events and maintains cart state.\r\n * You can also import the functions individually or create your own cart class.\r\n *\r\n * @example\r\n * import Cart from '@hayes0724/shopify-cart-fetch';\r\n * const shopifyCart = new Cart();\r\n * shopifyCart.getState().then(state => console.log(state))\r\n * @example\r\n * import {getState, removeItem, updateItem, addItem, clearItems} from '@hayes0724/shopify-cart-fetch'\r\n * getState().then(state => console.log(state))\r\n *\r\n */\r\nclass Cart {\r\n    constructor() {\r\n        this.events = new _lib_events__WEBPACK_IMPORTED_MODULE_0__.default();\r\n        /**\r\n         * Finds the the line item using it's line item key\r\n         * @param {LineItemKey} key\r\n         * @return {CartLineItem}\r\n         */\r\n        this.findItem = (key) => this.state.items.find((item) => item.key === key);\r\n        /**\r\n         * Finds the index of the line item using it's line item key\r\n         * @param {LineItemKey} key\r\n         * @return {CartItemIndex}\r\n         */\r\n        this.findItemIndex = (key) => this.state.items.findIndex((item) => item.key === key);\r\n        this.getState = async () => this.run(\"cart-fetch\", _lib_functions__WEBPACK_IMPORTED_MODULE_1__.getState);\r\n        this.addItem = async (items) => this.runLine(\"cart-add\", _lib_functions__WEBPACK_IMPORTED_MODULE_1__.addItem, items);\r\n        this.addItemFromForm = async (productForm) => this.runLine(\"cart-add\", _lib_functions__WEBPACK_IMPORTED_MODULE_1__.addItemFromForm, productForm);\r\n        this.clearItems = async () => this.run(\"cart-update\", _lib_functions__WEBPACK_IMPORTED_MODULE_1__.clearItems);\r\n        this.removeItem = async (item) => this.run(\"cart-remove\", _lib_functions__WEBPACK_IMPORTED_MODULE_1__.removeItem, item);\r\n        this.updateItem = async (item) => this.run(\"cart-update\", _lib_functions__WEBPACK_IMPORTED_MODULE_1__.updateItem, item);\r\n        this.updateItemById = async (item) => this.runLine(\"cart-update\", _lib_functions__WEBPACK_IMPORTED_MODULE_1__.updateItemById, item);\r\n        this.updateAttributes = async (attributes) => this.run(\"cart-update\", _lib_functions__WEBPACK_IMPORTED_MODULE_1__.updateAttributes, attributes);\r\n        this.clearAttributes = async () => this.run(\"cart-update\", _lib_functions__WEBPACK_IMPORTED_MODULE_1__.clearAttributes);\r\n        this.getAttributes = _lib_functions__WEBPACK_IMPORTED_MODULE_1__.getAttributes;\r\n        this.getNote = _lib_functions__WEBPACK_IMPORTED_MODULE_1__.getNote;\r\n        this.updateNote = async (note) => this.run(\"cart-update\", _lib_functions__WEBPACK_IMPORTED_MODULE_1__.updateNote, note);\r\n        this.clearNote = async () => this.run(\"cart-update\", _lib_functions__WEBPACK_IMPORTED_MODULE_1__.clearNote);\r\n    }\r\n    get state() {\r\n        return this._state;\r\n    }\r\n    set state(value) {\r\n        this._state = value;\r\n    }\r\n    async run(type, callback, data) {\r\n        this.events.emit(type, \"start\");\r\n        this.state = await callback(data);\r\n        this.events.emit(type, \"complete\", this.state);\r\n        return this.state;\r\n    }\r\n    async runLine(type, callback, data) {\r\n        this.events.emit(type, \"start\");\r\n        const lineItem = await callback(data);\r\n        const index = this.findItemIndex(lineItem.key);\r\n        index > -1 && lineItem.quantity > 0\r\n            ? (this.state.items[index] = lineItem)\r\n            : this.state.items.push(lineItem);\r\n        this.events.emit(type, \"complete\", this.state);\r\n        return lineItem;\r\n    }\r\n}\r\n\r\n\n\n//# sourceURL=webpack://@hayes0724/shopify-cart-fetch/./src/index.esm.ts?");

/***/ }),

/***/ "./src/lib/api.ts":
/*!************************!*\
  !*** ./src/lib/api.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"post\": () => /* binding */ post\n/* harmony export */ });\n/**\r\n * Cart API helper methods\r\n * ------------------------------------------------------------------------------\r\n * Reusable code for cart API methods\r\n *\r\n */\r\n/**\r\n * Creates the default config for post requests\r\n * @return {JSON}\r\n */\r\nfunction defaultRequestConfig() {\r\n    return JSON.parse(JSON.stringify({\r\n        method: \"POST\",\r\n        credentials: 'same-origin',\r\n        headers: {\r\n            'X-Requested-With': 'XMLHttpRequest',\r\n            'Content-Type': 'application/json;'\r\n        }\r\n    }));\r\n}\r\n/**\r\n * The default method for fetching JSON\r\n * @param {string} route\r\n * @param {Data?} data\r\n * @return {Promise<Resolve>}\r\n */\r\nasync function post(route, data) {\r\n    const config = {\r\n        ...defaultRequestConfig()\r\n    };\r\n    if (data) {\r\n        config.body = JSON.stringify(data);\r\n    }\r\n    return await fetch(route, { ...config })\r\n        .then((response) => response.json())\r\n        .then((json) => {\r\n        if (json.message) {\r\n            throw json;\r\n        }\r\n        return json;\r\n    });\r\n}\r\n\r\n\n\n//# sourceURL=webpack://@hayes0724/shopify-cart-fetch/./src/lib/api.ts?");

/***/ }),

/***/ "./src/lib/events.ts":
/*!***************************!*\
  !*** ./src/lib/events.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ CartEvents\n/* harmony export */ });\n/**\r\n * Events\r\n * ------------------------------------------------------------------------------\r\n *\r\n */\r\nclass CartEvents {\r\n    constructor(bus = new DocumentFragment()) {\r\n        this.bus = bus;\r\n    }\r\n    static publish(type, stage, data) {\r\n        return new CustomEvent(`${type}:${stage}`, {\r\n            detail: data,\r\n        });\r\n    }\r\n    on(event, handler) {\r\n        this.bus.addEventListener(event, handler);\r\n    }\r\n    emit(type, stage, data) {\r\n        this.bus.dispatchEvent(CartEvents.publish(type, stage, data));\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://@hayes0724/shopify-cart-fetch/./src/lib/events.ts?");

/***/ }),

/***/ "./src/lib/functions.ts":
/*!******************************!*\
  !*** ./src/lib/functions.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getState\": () => /* binding */ getState,\n/* harmony export */   \"addItem\": () => /* binding */ addItem,\n/* harmony export */   \"addItemFromForm\": () => /* binding */ addItemFromForm,\n/* harmony export */   \"clearItems\": () => /* binding */ clearItems,\n/* harmony export */   \"updateItem\": () => /* binding */ updateItem,\n/* harmony export */   \"updateItemById\": () => /* binding */ updateItemById,\n/* harmony export */   \"removeItem\": () => /* binding */ removeItem,\n/* harmony export */   \"getAttributes\": () => /* binding */ getAttributes,\n/* harmony export */   \"updateAttributes\": () => /* binding */ updateAttributes,\n/* harmony export */   \"clearAttributes\": () => /* binding */ clearAttributes,\n/* harmony export */   \"getNote\": () => /* binding */ getNote,\n/* harmony export */   \"updateNote\": () => /* binding */ updateNote,\n/* harmony export */   \"clearNote\": () => /* binding */ clearNote\n/* harmony export */ });\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ \"./src/lib/api.ts\");\n\r\n/**\r\n * Use the GET /cart.js endpoint to get the cart as JSON.\r\n * @see {@link https://shopify.dev/docs/themes/ajax-api/reference/cart#get-cart-js | ShopifyAPI: GET /cart.js }\r\n * @return {Promise<CartState>}\r\n */\r\nasync function getState() {\r\n    return await fetch(\"/cart.js\")\r\n        .then((response) => response.json())\r\n        .then((json) => json);\r\n}\r\n/**\r\n * Use the POST /cart/add.js endpoint to add product to cart.\r\n * @typedef {function} addItem\r\n * @see {@link https://shopify.dev/docs/themes/ajax-api/reference/cart#post-cart-add-js | ShopifyAPI: POST /cart/add.js}\r\n * @param {CartItemAdd} items\r\n * @return {Promise<CartLineItem>}\r\n */\r\nasync function addItem(items) {\r\n    return await (0,_api__WEBPACK_IMPORTED_MODULE_0__.post)(\"/cart/add.js\", items);\r\n}\r\n/**\r\n * Adds an item to your cart from a product form. The form must contain an input with name=\"id\".\r\n * If the quantity specified is more than what is available, the promise will be rejected and the cart state will remain unchanged\r\n * @param {HTMLFormElement} productForm\r\n * @return {Promise<CartLineItem>}\r\n * @see {@link https://shopify.dev/docs/themes/ajax-api/reference/cart#post-cart-add-js | ShopifyAPI: POST /cart/add.js}\r\n */\r\nasync function addItemFromForm(productForm) {\r\n    const formData = new FormData(productForm);\r\n    if (!formData.get(\"id\")) {\r\n        throw \"Cart form missing required property ID\";\r\n    }\r\n    return await (0,_api__WEBPACK_IMPORTED_MODULE_0__.post)(\"/cart/add.js\", formData);\r\n}\r\n/**\r\n * Use the POST /cart/clear.js endpoint to set all quantities of all line items in the cart to zero.\r\n * @see {@link https://shopify.dev/docs/themes/ajax-api/reference/cart#post-cart-clear-js | ShopifyAPI: POST /cart/clear.js}\r\n * @return {Promise<CartState>}\r\n */\r\nasync function clearItems() {\r\n    return await (0,_api__WEBPACK_IMPORTED_MODULE_0__.post)(\"/cart/clear.js\");\r\n}\r\n/**\r\n * The /cart/change.js endpoint changes the quantity and properties object of a cart line item.\r\n * Only items already in your cart can be changed, and only one line item at a time can be changed.\r\n * @see {@link https://shopify.dev/docs/themes/ajax-api/reference/cart#post-cart-change-js | ShopifyAPI: POST /cart/change.js }\r\n * @param {CartItemUpdate} item\r\n * @return {Promise<CartState>}\r\n */\r\nasync function updateItem(item) {\r\n    return await (0,_api__WEBPACK_IMPORTED_MODULE_0__.post)(\"/cart/change.js\", item);\r\n}\r\n/**\r\n * The /cart/change.js endpoint changes the quantity.\r\n * Only items already in your cart can be changed, and only one line item at a time can be changed.\r\n * @see {@link https://shopify.dev/docs/themes/ajax-api/reference/cart#post-cart-change-js | ShopifyAPI: POST /cart/change.js }\r\n * @param {CartItemUpdateById} item\r\n * @return {Promise<CartLineItem>}\r\n */\r\nasync function updateItemById(item) {\r\n    return await (0,_api__WEBPACK_IMPORTED_MODULE_0__.post)(\"/cart/change.js\", item);\r\n}\r\n/**\r\n * Removes an item from the cart using line item key or product id. Returns a promise which fulfills with the updated cart state.\r\n * @param {CartItemRemove} item\r\n * @see {@link https://shopify.dev/docs/themes/ajax-api/reference/cart#post-cart-change-js | ShopifyAPI: POST /cart/change.js }\r\n * @see {@link https://shopify.dev/docs/themes/liquid/reference/objects/line_item#line_item-key | ShopifyAPI: LineItemKey }\r\n * @return {Promise<CartState>}\r\n */\r\nasync function removeItem(item) {\r\n    return await (0,_api__WEBPACK_IMPORTED_MODULE_0__.post)(\"/cart/change.js\", { quantity: 0, ...item });\r\n}\r\n/**\r\n * Get the current cart state from Shopify and return the attributes\r\n * @return {Promise<CartState[\"attributes\"]>}\r\n * @see {@link https://shopify.dev/docs/themes/liquid/reference/objects/cart#cart-attributes | ShopifyAPI: cart-attributes }\r\n */\r\nasync function getAttributes() {\r\n    return getState().then((state) => state.attributes);\r\n}\r\n/**\r\n * Update cart attributes from Shopify and return the state\r\n * @param {Attributes} attributes\r\n * @return {Promise<CartState>}\r\n * @see {@link https://shopify.dev/docs/themes/liquid/reference/objects/cart#cart-attributes | ShopifyAPI: cart-attributes }\r\n */\r\nasync function updateAttributes(attributes) {\r\n    return await (0,_api__WEBPACK_IMPORTED_MODULE_0__.post)(\"/cart/update.js\", { attributes: { ...attributes } });\r\n}\r\n/**\r\n * Clear all cart attributes from Shopify and return the state\r\n * @return {Promise<CartState>}\r\n * @see {@link https://shopify.dev/docs/themes/liquid/reference/objects/cart#cart-attributes | ShopifyAPI: cart-attributes }\r\n */\r\nasync function clearAttributes() {\r\n    return getState()\r\n        .then((state) => state.attributes)\r\n        .then((attributes) => {\r\n        const clearList = {};\r\n        Object.getOwnPropertyNames(attributes).forEach((prop) => (clearList[prop] = \"\"));\r\n        return clearList;\r\n    })\r\n        .then((clearList) => (0,_api__WEBPACK_IMPORTED_MODULE_0__.post)(\"/cart/update.js\", { attributes: clearList }));\r\n}\r\n/**\r\n * Get the current cart state from Shopify and return the note\r\n * @return {Promise<CartState[\"note\"]>}\r\n * @see {@link https://shopify.dev/docs/themes/liquid/reference/objects/cart#cart-note | ShopifyAPI: cart.note }\r\n */\r\nasync function getNote() {\r\n    return getState().then((state) => state.note);\r\n}\r\n/**\r\n * Update or create the cart note\r\n * @param {string} note\r\n * @return {Promise<CartState>}\r\n * @see {@link https://shopify.dev/docs/themes/liquid/reference/objects/cart#cart-note | ShopifyAPI: cart.note }\r\n */\r\nasync function updateNote(note) {\r\n    return await (0,_api__WEBPACK_IMPORTED_MODULE_0__.post)(\"/cart/update.js\", { note: note });\r\n}\r\n/**\r\n * Remove the cart note\r\n * @return {Promise<CartState>}\r\n * @see {@link https://shopify.dev/docs/themes/liquid/reference/objects/cart#cart-note | ShopifyAPI: cart.note }\r\n */\r\nasync function clearNote() {\r\n    return await (0,_api__WEBPACK_IMPORTED_MODULE_0__.post)(\"/cart/update.js\", { note: \"\" });\r\n}\r\n\n\n//# sourceURL=webpack://@hayes0724/shopify-cart-fetch/./src/lib/functions.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__("./src/index.esm.ts");
/******/ })()
);;