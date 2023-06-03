import React from "react";
import { useAppSelector } from "hooks/useRedux";

import useCart from "hooks/useCart";

import TestImage from "assets/image/plsp-logo.png";
import "./Cart.scss";

const CartPages = () => {
    const { cart } = useAppSelector((state) => state.store);

    const [cartQuantityItem, cartRemoveProduct, cartInputUpdateQuantity] =
        useCart(cart);

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
                                        cartQuantityItem({
                                            cartProduct: cartProp,
                                            quantityAction: "decrement",
                                        })
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
                                        cartQuantityItem({
                                            cartProduct: cartProp,
                                            quantityAction: "increment",
                                        })
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

                <div className="checkout-container">
                    <div className="checkout-row-1">
                        <div>
                            <span>box</span>
                        </div>
                        <div className="select-container">
                            <button className="selectBtn">Select All</button>
                        </div>
                        <div className="delete-container">
                            <button className="deleteBtn">Delete</button>
                        </div>
                    </div>
                    <div className="checkout-row-2">
                        <div>Total : </div>
                        <div className="totalPeso">₱0</div>
                        <button className="checkoutBtn">Check Out</button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default CartPages;
