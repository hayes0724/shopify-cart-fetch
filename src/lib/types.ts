/**
 * The current cart object from Shopify
 * https://shopify.dev/docs/themes/ajax-api/reference/cart#get-cart-js
 */
import {ShopifyError} from "./errors";

export type CartState = {
  readonly token: string;
  readonly note: string;
  readonly attributes: Attributes;
  readonly total_price: number;
  readonly total_weight: number;
  readonly item_count: number;
  readonly items: CartLineItem[];
  readonly requires_shipping: boolean;
  readonly currency: string;
  readonly items_subtotal_price: number;
  readonly original_total_price: number;
  readonly total_discount: number;
  readonly cart_level_discount_applications: CartLevelDiscountApplications[];
};

/**
 * Shopify cart attributes
 * https://shopify.dev/docs/themes/liquid/reference/objects/cart#cart-attributes
 */
export type Attributes = {
  [index: string]: string;
};

/**
 * Shopify cart level discounts
 * https://shopify.dev/docs/themes/liquid/reference/objects/cart#cart-cart_level_discount_applications
 */
export type CartLevelDiscountApplications = {
  readonly type: string;
  readonly key: string;
  readonly title: string;
  readonly description: string;
  readonly value: string;
  readonly created_at: string;
  readonly value_type: string;
  readonly allocation_method: string;
  readonly target_selection: string;
  readonly target_type: string;
  readonly total_allocated_amount: number;
};

/**
 * Cart line_item object
 * https://shopify.dev/docs/themes/liquid/reference/objects/line_item/
 */
export type CartLineItem = {
  readonly id: number;
  readonly quantity: number;
  readonly variant_id: number;
  readonly key: string;
  readonly title: string;
  readonly price: number;
  readonly line_price: number;
  readonly final_price: number;
  readonly final_line_price: number;
  readonly sku: string;
  readonly grams: number;
  readonly vendor: string;
  readonly taxable: boolean;
  readonly product_id: number;
  readonly product_has_only_default_variant: boolean;
  readonly properties: LineItemProperties;
  readonly gift_card: boolean;
  readonly url: string;
  readonly featured_image: FeaturedImage;
  readonly image: string;
  readonly handle: string;
  readonly requires_shipping: boolean;
  readonly product_title: string;
  readonly product_description: string;
  readonly product_type: string;
  readonly variant_title: string;
  readonly variant_options: string[];
  readonly options_with_values: OptionsWithValues[];
  readonly line_level_discount_allocations?: LineLevelDiscountAllocation[];
};

export type FeaturedImage = {
  readonly url: string;
  readonly aspect_ratio: number;
  readonly alt: string;
};

export type OptionsWithValues = {
  readonly name: string;
  readonly value: string;
};

export type LineLevelDiscountAllocation = {
  amount: number;
  discount_application: DiscountApplication;
};

export type DiscountApplication = {
  type: string;
  key: string;
  title: string;
  description: null;
  value: string;
  created_at: string;
  value_type: string;
  allocation_method: string;
  target_selection: string;
  target_type: string;
  total_allocated_amount: number;
};

export type CartItemAdd = {
  id: VariantID;
  quantity?: number;
  properties?: LineItemProperties;
};

export type CartItemUpdate = {
  quantity: number;
  properties?: LineItemProperties;
} & ({ line: CartItemIndex } | { id: CartItemPropertyID });

export type CartItemRemove = { id: CartItemPropertyID } | { line: CartItemIndex };

export type CartItems = CartItemAdd[] | CartItemAdd

export type CartItemsResponse = { items: CartLineItem[] }

/**
 * The id value is the line item's variant_id or the line item's key.
 */
export type CartItemPropertyID = VariantID | LineItemKey;

/**
 * The 1-based index position of the item in the cart.
 */
export type CartItemIndex = number;

/**
 * The id value is the line item's variant_id or the line item's key.
 * @see {@link https://shopify.dev/docs/themes/liquid/reference/objects/line_item#line_item-variant_id | ShopifyAPI: variant_id }
 */
export type VariantID = number | string;

/**
 * The line item's key.
 * @see {@link https://shopify.dev/docs/themes/liquid/reference/objects/line_item#line_item-key | ShopifyAPI: line_item.key }
 */
export type LineItemKey = string;

/**
 * An array of custom information for an item that has been added to the cart.
 * @see {@link https://shopify.dev/docs/themes/liquid/reference/objects/line_item/#line_item-properties | ShopifyAPI: line_item.properties }
 */
export type LineItemProperties = {
  [index: string]: string;
};

/**
 * Shopify cart API routes
 * @see {@link https://shopify.dev/docs/themes/ajax-api/reference/cart | ShopifyAPI: cart }
 */
export type CartRoute =
  | "/cart.js"
  | "/cart/add.js"
  | "/cart/update.js"
  | "/cart/change.js"
  | "/cart/clear.js"
  | "/cart/shipping_rates.json"
  | "/cart/prepare_shipping_rates.json"
  | "/cart/async_shipping_rates.json";

export type CartSettings = {
  readonly url?: string;
  readonly postConfig?: RequestInit;
  readonly updateState?: boolean;
};

export type ShopifyResponse = CartState | CartItemsResponse | ShopifyError

export type CartEvents = 'cart:requestStarted' | 'cart:requestComplete' | 'cart:ready'
