/**
 * The current cart object from Shopify
 * https://shopify.dev/docs/themes/ajax-api/reference/cart#get-cart-js
 */
export declare class CartState {
    token?: string;
    note?: string;
    attributes?: Attributes;
    total_price?: number;
    total_weight?: number;
    item_count?: number;
    items?: Items[];
    requires_shipping?: boolean;
    currency?: string;
    items_subtotal_price?: number;
    cart_level_discount_applications?: CartLevelDiscountApplications[];
}
/**
 * Shopify cart attributes
 * https://shopify.dev/docs/themes/liquid/reference/objects/cart#cart-attributes
 */
export declare class Attributes {
    [index: string]: string;
}
/**
 * Cart line_item object
 * https://shopify.dev/docs/themes/liquid/reference/objects/line_item/
 */
export declare class Items {
    id?: number;
    quantity?: number;
    variant_id?: number;
    key?: string;
    title?: string;
    price?: number;
    line_price?: number;
    final_price?: number;
    final_line_price?: number;
    sku?: string;
    grams?: number;
    vendor?: string;
    taxable?: boolean;
    product_id?: number;
    product_has_only_default_variant?: boolean;
    gift_card?: boolean;
    url?: string;
    featured_image?: FeaturedImage;
    image?: string;
    handle?: string;
    requires_shipping?: boolean;
    product_title?: string;
    product_description?: string;
    product_type?: string;
    variant_title?: string;
    variant_options?: string[];
    options_with_values?: OptionsWithValues[];
}
export declare class FeaturedImage {
    url?: string;
    aspect_ratio?: number;
    alt?: string;
}
export declare class OptionsWithValues {
    name?: string;
    value?: string;
}
export declare class CartLevelDiscountApplications {
    type?: string;
    key?: string;
    title?: string;
    description?: string;
    value?: string;
    created_at?: string;
    value_type?: string;
    allocation_method?: string;
    target_selection?: string;
    target_type?: string;
    total_allocated_amount?: number;
}
