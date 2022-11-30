export type TProduct = {
    id: number;
    name: string;
    quantity: number;
    price: number;
    sold: number;
    img: string;
    color: string[];
};
export type TSelectedProduct = {
    id: number;
    name: string;
    price: number;
    img?: string;
    color: string[];
    quantity: number;
    totalPrice: number;
    totalQuantity: number;
};
export type Seller = {
    id: number;
    firstname: string;
    lastname: string;
    email: string;
};
