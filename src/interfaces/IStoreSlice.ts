export interface IStoreSlice {
    cart: [];
    loading: "idle" | "pending" | "succeeded" | "failed";
    success: boolean;
    error: boolean;
    message: string;
}
