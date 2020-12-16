/**
 * The current cart object from Shopify
 * https://shopify.dev/docs/themes/ajax-api/reference/cart#get-cart-js
 */
export class CartState {
  public token?: string;
  public note?: string;
  public attributes?: Attributes;
  public total_price?: number;
  public total_weight?: number;
  public item_count?: number;
  public items?: Items[];
  public requires_shipping?: boolean;
  public currency?: string;
  public items_subtotal_price?: number;
  public cart_level_discount_applications?: CartLevelDiscountApplications[];
}

/**
 * Shopify cart attributes
 * https://shopify.dev/docs/themes/liquid/reference/objects/cart#cart-attributes
 */
export class Attributes {
  [index: string]: string;
}

/**
 * Cart line_item object
 * https://shopify.dev/docs/themes/liquid/reference/objects/line_item/
 */
export class Items {
  public id?: number;
  public quantity?: number;
  public variant_id?: number;
  public key?: string;
  public title?: string;
  public price?: number;
  public line_price?: number;
  public final_price?: number;
  public final_line_price?: number;
  public sku?: string;
  public grams?: number;
  public vendor?: string;
  public taxable?: boolean;
  public product_id?: number;
  public product_has_only_default_variant?: boolean;
  public gift_card?: boolean;
  public url?: string;
  public featured_image?: FeaturedImage;
  public image?: string;
  public handle?: string;
  public requires_shipping?: boolean;
  public product_title?: string;
  public product_description?: string;
  public product_type?: string;
  public variant_title?: string;
  public variant_options?: string[];
  public options_with_values?: OptionsWithValues[];
}

export class FeaturedImage {
  public url?: string;
  public aspect_ratio?: number;
  public alt?: string;
}

export class OptionsWithValues {
  public name?: string;
  public value?: string;
}

export class CartLevelDiscountApplications {
  public type?: string;
  public key?: string;
  public title?: string;
  public description?: string;
  public value?: string;
  public created_at?: string;
  public value_type?: string;
  public allocation_method?: string;
  public target_selection?: string;
  public target_type?: string;
  public total_allocated_amount?: number;
}
