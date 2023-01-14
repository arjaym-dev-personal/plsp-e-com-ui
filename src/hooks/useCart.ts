import React from "react";

import { useAppDispatch } from "./useRedux";

import {
    cartProductUpdateQuantity,
    cartProductRemove,
} from "redux/slice/storeSlice";

import { TCartProduct } from "types/TProducts";

type TCartQuantityItem = {
    cartProduct: TCartProduct;
    quantityAction: string;
};

const useCart = (cart: TCartProduct[]) => {
    const dispatch = useAppDispatch();

    const cartQuantityItem = ({
        cartProduct,
        quantityAction,
    }: TCartQuantityItem) => {
        console.log(quantityAction);
        const totalQuantity =
            quantityAction === "increment"
                ? cartProduct.totalQuantity + 1
                : cartProduct.totalQuantity - 1;

        let newTotalQuantity;

        if (totalQuantity <= 1) {
            newTotalQuantity = 1;
        } else {
            newTotalQuantity = totalQuantity;
        }

        const newTotalPrice = newTotalQuantity * cartProduct.price;

        const newCartProduct = {
            ...cartProduct,
            totalPrice: newTotalPrice,
            totalQuantity: newTotalQuantity,
        };

        dispatch(cartProductUpdateQuantity(newCartProduct));
    };

    const cartRemoveProduct = (cartProductId: number | string) => {
        const copiedCart = [...cart];

        const filterRemoveProduct = copiedCart.filter(
            (cart) => cart.id !== cartProductId
        );

        dispatch(cartProductRemove(filterRemoveProduct));
    };

    const cartInputUpdateQuantity = (e: any, cartProduct: TCartProduct) => {
        const productQuantity = e.target.value;

        const newTotalQuantity = parseInt(productQuantity || 0);
        const newTotalPrice =
            parseInt(productQuantity || 0) * cartProduct.price;

        const newCartProduct = {
            ...cartProduct,
            totalPrice: newTotalPrice,
            totalQuantity: newTotalQuantity,
        };

        dispatch(cartProductUpdateQuantity(newCartProduct));
    };

    return [
        cartQuantityItem,
        cartRemoveProduct,
        cartInputUpdateQuantity,
    ] as const;
};

export default useCart;
