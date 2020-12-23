/**
 * The current cart object from Shopify
 * https://shopify.dev/docs/themes/ajax-api/reference/cart#get-cart-js
 */
export declare type CartState = {
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
    readonly cart_level_discount_applications: CartLevelDiscountApplications[];
};
/**
 * Shopify cart attributes
 * https://shopify.dev/docs/themes/liquid/reference/objects/cart#cart-attributes
 */
export declare type Attributes = {
    [index: string]: string;
};
/**
 * Shopify cart level discounts
 * https://shopify.dev/docs/themes/liquid/reference/objects/cart#cart-cart_level_discount_applications
 */
export declare type CartLevelDiscountApplications = {
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
export declare type CartLineItem = {
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
};
export declare type FeaturedImage = {
    readonly url: string;
    readonly aspect_ratio: number;
    readonly alt: string;
};
export declare type OptionsWithValues = {
    readonly name: string;
    readonly value: string;
};
/**
 * Cart item is used for adding an item in the cart. Requires line or id property.
 */
export declare type CartItemAdd = {
    id: VariantID;
    quantity?: number;
    properties?: LineItemProperties;
};
/**
 * Cart item is used for updating an item in the cart. Requires line or id property.
 */
export declare type CartItemUpdateById = {
    id: VariantID;
    quantity: number;
};
export declare type CartItemUpdate = {
    quantity: number;
    properties?: LineItemProperties;
} & ({
    line: LineItemKey;
} | {
    id: CartItemPropertyLine;
});
/**
 * Cart item is used for removing an item in the cart. Requires line or id property.
 */
export declare type CartItemRemove = {
    quantity: 0;
} & ({
    id: CartItemPropertyID;
} | {
    line: LineItemKey;
});
/**
 * The id value is the line item's variant_id or the line item's key.
 */
export declare type CartItemPropertyID = VariantID | LineItemKey;
/**
 * The 1-based index position of the item in the cart.
 */
export declare type CartItemPropertyLine = number;
/**
 * The id value is the line item's variant_id or the line item's key.
 * @see {@link https://shopify.dev/docs/themes/liquid/reference/objects/line_item#line_item-variant_id | ShopifyAPI: variant_id }
 */
export declare type VariantID = number;
/**
 * The id value is the line item's variant_id or the line item's key.
 * @see {@link https://shopify.dev/docs/themes/liquid/reference/objects/line_item#line_item-key | ShopifyAPI: line_item.key }
 */
export declare type LineItemKey = string;
/**
 * An array of custom information for an item that has been added to the cart.
 * @see {@link https://shopify.dev/docs/themes/liquid/reference/objects/line_item/#line_item-properties | ShopifyAPI: line_item.properties }
 */
export declare type LineItemProperties = {
    [index: string]: string;
};
/**
 * Shopify cart API routes
 * @see {@link https://shopify.dev/docs/themes/ajax-api/reference/cart | ShopifyAPI: cart }
 */
export declare type CartRoute = "/cart.js" | "/cart/add.js" | "/cart/update.js" | "/cart/change.js" | "/cart/clear.js" | "/cart/shipping_rates.json" | "/cart/prepare_shipping_rates.json" | "/cart/async_shipping_rates.json";
//# sourceMappingURL=types.d.ts.map