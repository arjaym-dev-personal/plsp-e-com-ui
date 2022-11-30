import { TSelectedProduct } from "types/TProducts";
export interface IStoreSlice {
    cart: TSelectedProduct[];
    loading: "idle" | "pending" | "succeeded" | "failed";
    success: boolean;
    error: boolean;
    message: string;
}
