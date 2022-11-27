import { createSlice } from "@reduxjs/toolkit";
import { IStoreSlice } from "interfaces/IStoreSlice";

const initialState = {
    cart: [],
    loading: "idle",
    success: false,
    error: false,
    message: "",
} as IStoreSlice;

const storeSlice = createSlice({
    name: "store",
    initialState,
    reducers: {},
});

export const {} = storeSlice.actions;

export default storeSlice.reducer;
