export interface ShopifyError {
    readonly status: number;
    readonly message: "Cart Error";
    readonly description: string;
}
export declare class InventoryError implements ShopifyError {
    readonly status = 422;
    readonly message = "Cart Error";
    readonly description: string;
    constructor(description: string);
}
export declare class VariantError implements ShopifyError {
    readonly status = 404;
    readonly message = "Cart Error";
    readonly description = "Cannot find variant";
}
//# sourceMappingURL=errors.d.ts.map