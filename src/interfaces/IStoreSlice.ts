import { TCartProduct } from "types/TProducts";
export interface IStoreSlice {
    cart: TCartProduct[];
    loading: "idle" | "pending" | "succeeded" | "failed";
    success: boolean;
    error: boolean;
    message: string;
}
