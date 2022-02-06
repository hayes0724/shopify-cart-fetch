import { CartState } from "../../src/lib/types";

export const cartResponse: CartState = {
  token: "1d19a32178501c44ef2223d73c54d16d",
  note: "Hello!",
  attributes: {
    "Gift wrap": "Yes",
  },
  original_total_price: 2460,
  total_price: 9100,
  total_weight: 0,
  total_discount: 0,
  item_count: 3,
  items: [
    {
      id: 794864229,
      properties: {},
      quantity: 1,
      variant_id: 794864229,
      key: "794864229:03af7a8cb59a4c3c45595c76fa8cb53c",
      title: "Red Rain Coat - Small",
      price: 12900,
      line_price: 12900,
      final_price: 12900,
      final_line_price: 12900,
      sku: null,
      grams: 0,
      vendor: "Shopify",
      taxable: true,
      product_id: 388319916,
      product_has_only_default_variant: false,
      gift_card: false,
      url: "/products/red-rain-coat?variant=794864229",
      featured_image: {
        url:
          "http://cdn.shopify.com/s/files/1/0040/7092/products/red-rain-coat.jpeg?v=1402604893",
        aspect_ratio: 1.0,
        alt: "Red rain coat with a hood",
      },
      image:
        "http://cdn.shopify.com/s/files/1/0040/7092/products/red-rain-coat.jpeg?v=1402604893",
      handle: "red-rain-coat",
      requires_shipping: true,
      product_title: "Red Rain Coat",
      product_description: "A bright red rain coat for rainy days!",
      product_type: "Coat",
      variant_title: "Red",
      variant_options: ["Red"],
      options_with_values: [
        {
          name: "Color",
          value: "Red",
        },
      ],
    },
    {
      id: 794864101,
      properties: {},
      quantity: 2,
      variant_id: 794864101,
      key: "794864101:816a55d9a53cd82281f8fdcfe967db14",
      title: "Gray Fedora",
      price: 2650,
      line_price: 0,
      final_price: 2650,
      final_line_price: 5300,
      sku: null,
      grams: 0,
      vendor: "Shopify",
      taxable: true,
      product_id: 388319892,
      product_has_only_default_variant: false,
      gift_card: false,
      url: "/products/gray-fedora?variant=794864101",
      featured_image: {
        url:
          "http://cdn.shopify.com/s/files/1/0040/7092/products/gray-fedora.jpeg?v=1402604885",
        aspect_ratio: 1.0,
        alt: "Gray fedora made of straw",
      },
      image:
        "http://cdn.shopify.com/s/files/1/0040/7092/products/gray-fedora.jpeg?v=1402604885",
      handle: "gray-fedora",
      requires_shipping: true,
      product_title: "Gray Fedora",
      product_description: "A gray hat for looking cool!",
      product_type: "Hats",
      variant_title: "Gray",
      variant_options: ["Gray"],
      options_with_values: [
        {
          name: "Color",
          value: "Gray",
        },
      ],
      line_level_discount_allocations: [
        {
          amount: 500,
          discount_application: {
            type: "script",
            key: "a8a3d7aa-7d00-4827-a2e1-b03c32160bf2",
            title: "5 Dollar Off",
            description: null,
            value: "5.00",
            created_at: "2019-04-10T20:49:10.023Z",
            value_type: "fixed_amount",
            allocation_method: "one",
            target_selection: "explicit",
            target_type: "line_item",
            total_allocated_amount: 500,
          },
        },
      ],
    },
  ],
  requires_shipping: true,
  currency: "CAD",
  items_subtotal_price: 18200,
  cart_level_discount_applications: [
    {
      type: "automatic",
      key: "059b5e54-3c5d-4e7e-b377-8e09d8376269",
      title: "50% Summer Deal",
      description: null,
      value: "50.0",
      created_at: "2019-04-10T20:49:00.148Z",
      value_type: "percentage",
      allocation_method: "across",
      target_selection: "all",
      target_type: "line_item",
      total_allocated_amount: 9100,
    },
  ],
};

export const cartEmptyResponse: CartState = {
  token: "58c47b8617dd75349ee464072a665c9b",
  note: null,
  attributes: {
    "gift wrap": "true",
  },
  original_total_price: 0,
  total_price: 0,
  total_discount: 0,
  total_weight: 0.0,
  item_count: 0,
  items: [],
  requires_shipping: false,
  currency: "USD",
  items_subtotal_price: 0,
  cart_level_discount_applications: [],
};

export const lineItemResponse = {
  items: [
    {
      id: 794864229,
      quantity: 1,
      properties: {
        "First name": "Caroline",
      },
    },
  ],
};

export const variantErrorResponse = {
  "status": 404,
  "message": "Cart Error",
  "description": "Cannot find variant"
}

export const inventoryErrorResponse = {
  "status": 422,
  "message": "Cart Error",
  "description": "You can only add 8 Messenger Bag to the cart."
}
