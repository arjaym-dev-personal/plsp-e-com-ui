import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { BsFillCartPlusFill } from "react-icons/bs";

import { TProduct } from "types/TProducts";

import LowestPriceGuaranteedIcon from "assets/image/low-price-guaranteed.png";

import Products from "utils/Product.data";

import "./StoreItemsById.scss";

const StoreItemsById = () => {
    const { productId } = useParams();

    const [product, setProduct] = useState<TProduct>();

    useEffect(() => {
        // Check item
        function validateItem() {
            const productExist = Products.filter((prdct) =>
                prdct.product.id === parseInt(productId!) ? true : false
            )[0];

            if (!productExist) {
                throw new Response("Not Found", {
                    status: 404,
                });
            } else {
                setProduct(productExist.product);
            }
        }

        validateItem();
    }, []);

    return (
        <div className="product-selected-wrapper">
            <div className="product-showcase">
                <div className="product-showcase--current-img">
                    <img
                        src={product && product.img}
                        alt={product && product.name}
                    />
                </div>
            </div>
            <div className="product-info">
                <span className="product-info-name">
                    {product && product.name}
                </span>
                <div className="product-info-pricing">
                    <div className="product-price">
                        &#8369;{product && product.price}
                    </div>
                    <div className="product-lpg">
                        <img
                            src={LowestPriceGuaranteedIcon}
                            alt="lowest-price-guaranteed-logo"
                        />
                        <span>Lowest Price Guaranteed</span>
                    </div>
                </div>
                <div className="product-info-group">
                    <div className="product-info-group-label">
                        <label>Quantity</label>
                    </div>
                    <div className="product-info-group-content">
                        <div className="quantity-indicator">
                            <button>
                                <AiOutlineMinus />
                            </button>
                            <input type="text" />
                            <button>
                                <AiOutlinePlus />
                            </button>
                            <div className="quantity-availability">
                                {product && product.quantity} pieces available
                            </div>
                        </div>
                    </div>
                </div>
                <div className="product-cart-cta">
                    <button>
                        <BsFillCartPlusFill />
                        <span>Add To Cart</span>
                    </button>
                    <button>Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default StoreItemsById;
