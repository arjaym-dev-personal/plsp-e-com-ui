export type TProduct = {
    id: number;
    name: string;
    quantity: number;
    price: number;
    sold: number;
    img: string;
    color: string[];
};

export type TCartProduct = {
    id: number | string;
    name: string;
    img?: string;
    color?: string[];
    price: number;
    quantity: number;
    totalPrice: number;
    totalQuantity: number;
    isChecked?: boolean;
};

export type Seller = {
    id: number;
    firstname: string;
    lastname: string;
    email: string;
};
