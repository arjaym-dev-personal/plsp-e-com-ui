import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { BsFillCartPlusFill } from "react-icons/bs";

import { useAppSelector, useAppDispatch } from "hooks/useRedux";

import { addProductToCart } from "redux/slice/storeSlice";

import { TProduct, TSelectedProduct } from "types/TProducts";

import LowestPriceGuaranteedIcon from "assets/image/low-price-guaranteed.png";

import Products from "utils/Product.data";

import "./StoreItemsById.scss";

const StoreItemsById = () => {
    const dispatch = useAppDispatch();
    const { productId } = useParams();

    const { cart } = useAppSelector((state) => state.store);

    const [product, setProduct] = useState<TProduct>();

    const [selectedProduct, setSelectedProduct] = useState<TSelectedProduct>({
        id: 0,
        name: "",
        price: 0,
        img: "",
        color: [],
        quantity: 1,
        totalPrice: 0,
        totalQuantity: 1,
    });

    const incrementTotalQuantity = () => {
        const totalQty =
            selectedProduct.totalQuantity >= selectedProduct.quantity
                ? selectedProduct.quantity
                : selectedProduct.totalQuantity + 1;

        const totalPrice = totalQty * selectedProduct.price;

        setSelectedProduct({
            ...selectedProduct,
            totalPrice: totalPrice,
            totalQuantity: totalQty,
        });
    };

    const decrementTotalQuantity = () => {
        const totalQty =
            selectedProduct.totalQuantity === 1
                ? 1
                : selectedProduct.totalQuantity - 1;
        const totalPrice = totalQty * selectedProduct.price;
        setSelectedProduct({
            ...selectedProduct,
            totalPrice: totalPrice,
            totalQuantity: totalQty,
        });
    };

    const inputTotalQuantity = (e: any) => {
        const { value } = e.target;

        if (!value) {
            setSelectedProduct({ ...selectedProduct, totalQuantity: 1 });
        } else {
            const totalQty =
                parseInt(value) > selectedProduct.quantity
                    ? selectedProduct.quantity
                    : parseInt(value);
            const totalPrice = totalQty * selectedProduct.price;
            setSelectedProduct({
                ...selectedProduct,
                totalPrice: totalPrice,
                totalQuantity: totalQty,
            });
        }
    };

    const addToCart = () => {
        dispatch(addProductToCart(selectedProduct));
    };
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
                const { product } = productExist;

                setSelectedProduct({
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    img: product.img,
                    color: product.color,
                    quantity: product.quantity,
                    totalPrice: product.price * 1,
                    totalQuantity: 1,
                });
                setProduct(productExist.product);
            }
        }

        validateItem();
    }, []);

    // console.log("Selected Product: ", selectedProduct);

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
                            <button onClick={decrementTotalQuantity}>
                                <AiOutlineMinus />
                            </button>
                            <input
                                type="text"
                                value={selectedProduct.totalQuantity}
                                onChange={inputTotalQuantity}
                                min={1}
                            />
                            <button onClick={incrementTotalQuantity}>
                                <AiOutlinePlus />
                            </button>
                            <div className="quantity-availability">
                                {product && product.quantity} pieces available
                            </div>
                        </div>
                    </div>
                </div>
                <div className="product-cart-cta">
                    <button onClick={addToCart}>
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
