import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsFillCartPlusFill } from "react-icons/bs";
import { FaAngleRight } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "hooks/useRedux";

import "./Header.scss";

import PlspLogo from "assets/image/plsp-logo.png";

const Header = () => {
    const dispatch = useAppDispatch();

    const { cart } = useAppSelector((state) => state.store);

    const [cartDrawerIsActive, setCartDrawerIsActive] = useState(false);
    const [cartDrawerClasses, setCartDrawerClasses] = useState("cart-drawer");

    const showCartDrawer = () => {
        setCartDrawerIsActive(true);
        setCartDrawerClasses("cart-drawer cart-drawer--show");
    };

    const hideCartDrawer = async () => {
        setCartDrawerClasses("cart-drawer cart-drawer--hide");
        await new Promise((resolve) => setTimeout(resolve, 200));
        setCartDrawerIsActive(false);
    };

    return (
        <header className="header">
            <div className="header-logo-wrapper">
                <Link to="/">
                    <img src={PlspLogo} alt="plsp logo" />
                </Link>
            </div>
            <h1 className="header-primary-title">
                <span>Pamantasan ng lungsod ng san pablo</span>
                <span>Education. Empowerment. Excellence</span>
            </h1>
            <div className="header-cart" onClick={showCartDrawer}>
                <BsFillCartPlusFill className="header-cart-icon" />
                {cart.length > 0 && (
                    <span className="header-cart-qty">{cart.length}</span>
                )}
            </div>
            {cartDrawerIsActive && (
                <div className={cartDrawerClasses}>
                    <div className="cart-drawer-btn">
                        <FaAngleRight onClick={hideCartDrawer} />
                    </div>
                    <div className="cart-drawer-items plsp-scrollbar">
                        {cart &&
                            cart.map((cartProps) => (
                                <div
                                    className="cart-drawer-item"
                                    key={cartProps.id}
                                >
                                    <img
                                        src={cartProps.img}
                                        className="cart-drawer-item--img"
                                        alt={cartProps.name}
                                    />
                                    <div className="cart-drawer-item--name">
                                        {cartProps.name}
                                    </div>
                                    <span className="cart-drawer-item--price">
                                        &#8369;{cartProps.price}
                                    </span>
                                </div>
                            ))}
                    </div>
                    {cart.length > 0 ? (
                        <div className="cart-drawer-btn">
                            <button>View My Shopping Cart</button>
                        </div>
                    ) : (
                        <p>No Products Yet</p>
                    )}
                </div>
            )}
        </header>
    );
};

export default Header;
