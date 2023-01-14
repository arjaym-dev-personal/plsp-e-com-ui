import { createSlice, current } from "@reduxjs/toolkit";
import { IStoreSlice } from "interfaces/IStoreSlice";

import type { PayloadAction } from "@reduxjs/toolkit";

import { TCartProduct } from "types/TProducts";

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
    reducers: {
        addProductToCart: (state, action: PayloadAction<TCartProduct>) => {
            const product = action.payload;
            const copiedCart = state.cart;
            const productExistOnCart =
                copiedCart.filter(
                    (cartProduct) => cartProduct.id === product.id
                ).length > 0
                    ? true
                    : false;

            const newCart = copiedCart.map((cartProduct) => {
                if (cartProduct.id === product.id) {
                    const totalQty =
                        product.totalQuantity + cartProduct.totalQuantity >=
                        cartProduct.quantity
                            ? cartProduct.quantity
                            : product.totalQuantity + cartProduct.totalQuantity;
                    const totalPrice = totalQty * cartProduct.price;
                    return {
                        ...cartProduct,
                        totalQuantity: totalQty,
                        totalPrice: totalPrice,
                    };
                } else {
                    return cartProduct;
                }
            });

            if (productExistOnCart) {
                state.cart = newCart;
            } else {
                state.cart.push(product);
            }
        },
        cartProductUpdateQuantity: (
            state,
            action: PayloadAction<TCartProduct>
        ) => {
            const newCartProduct = action.payload;

            const copiedCart = state.cart;

            const btnUpdatedCart = copiedCart.map((cart) => {
                if (cart.id === newCartProduct.id) {
                    return { ...newCartProduct };
                } else {
                    return cart;
                }
            });

            state.cart = btnUpdatedCart;
        },

        cartProductRemove: (state, action: PayloadAction<TCartProduct[]>) => {
            const cartProduct = action.payload;

            state.cart = cartProduct;
        },
    },
});

export const {
    addProductToCart,
    cartProductUpdateQuantity,
    cartProductRemove,
} = storeSlice.actions;

export default storeSlice.reducer;
