export interface ShopifyError {
  readonly status: number;
  readonly message: "Cart Error";
  readonly description: string
}

export class InventoryError implements ShopifyError {
  readonly status = 422;
  readonly message = "Cart Error";
  readonly description: string
  constructor(description: string) {
    this.description = description
  }
}

export class VariantError implements ShopifyError {
  readonly status = 404;
  readonly message = "Cart Error";
  readonly description = "Cannot find variant"
}
