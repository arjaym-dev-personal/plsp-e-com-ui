import React from "react";
import { useAppSelector, useAppDispatch } from "hooks/useRedux";

import { TCartProduct } from "types/TProducts";
import {
    cartProductRemove,
    cartProductUpdateQuantity,
} from "redux/slice/storeSlice";

import TestImage from "assets/image/plsp-logo.png";
import "./Cart.scss";

const CartPages = () => {
    const dispatch = useAppDispatch();

    const { cart } = useAppSelector((state) => state.store);

    const cartQuantityItem = (
        cartProduct: TCartProduct,
        quantityAction: string
    ) => {
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
    return (
        <React.Fragment>
            <div className="cart-wrapper">
                <ul className="cart-wrapper-header">
                    <li>
                        <div className="cart-header-checkbox">
                            {/*  <input type="checkbox" /> */}
                        </div>
                        <span className="cart-header-label">Product</span>
                    </li>
                    <li>Unit Price</li>
                    <li>Quantity</li>
                    <li>Total Price</li>
                    <li>Actions</li>
                </ul>
                <div className="cart-items">
                    {cart.map((cartProp) => (
                        <div className="cart-item" key={cartProp.id}>
                            <div className="cart-item-col row-1">
                                <div className="select-checkbox">
                                    <input type="checkbox" />
                                </div>
                                <div className="product-img-description">
                                    <img
                                        src={cartProp.img}
                                        alt={cartProp.name}
                                    />
                                    <div>
                                        <p>{cartProp.name}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="cart-item-col unit-price">
                                <span>&#8369;{cartProp.price}</span>
                            </div>
                            <div className="cart-item-col quantity">
                                <button
                                    onClick={() =>
                                        cartQuantityItem(cartProp, "decrement")
                                    }
                                >
                                    -
                                </button>
                                <input
                                    type="text"
                                    value={cartProp.totalQuantity}
                                    onChange={(e) =>
                                        cartInputUpdateQuantity(e, cartProp)
                                    }
                                />
                                <button
                                    onClick={() =>
                                        cartQuantityItem(cartProp, "increment")
                                    }
                                >
                                    +
                                </button>
                            </div>
                            <div className="cart-item-col total-price">
                                <span>
                                    &#8369;
                                    {cartProp.totalPrice.toLocaleString()}
                                </span>
                            </div>
                            <div className="cart-item-col actions">
                                <button
                                    onClick={() =>
                                        cartRemoveProduct(cartProp.id)
                                    }
                                >
                                    Delete
                                </button>
                                {/* <button className="find-similar">
                                Find Similar
                            </button> */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </React.Fragment>
    );
};

export default CartPages;
