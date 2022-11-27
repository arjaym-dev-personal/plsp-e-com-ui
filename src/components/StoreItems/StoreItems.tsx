import { useNavigate } from "react-router-dom";

import { TProduct, Seller } from "types/TProducts";

import { SpecialCharToDash } from "helpers/SpecialCharToDash";

import Products from "utils/Product.data";
import "./StoreItems.scss";

const StoreItems = () => {
    const navigate = useNavigate();

    const handleViewProduct = (product: TProduct, seller: Seller) => {
        navigate(`/${SpecialCharToDash(product.name)}/${product.id}`, {
            state: {
                product,
                seller,
            },
        });
    };

    return (
        <div className="store-items-wrapper">
            <div className="store-items">
                {Products.map(({ product, seller }, index) => (
                    <div
                        key={index}
                        className="store-items--items"
                        onClick={() => handleViewProduct(product, seller)}
                    >
                        <img src={product.img} alt="" className="item-img" />
                        <div className="item-details">
                            <p className="item-details-name">{product.name}</p>
                            <div className="item-details-label">
                                <p className="item-details-label-price">
                                    &#8369; {product.price}
                                </p>
                                <p className="item-details-label-sold">
                                    {product.sold}k sold
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default StoreItems;
