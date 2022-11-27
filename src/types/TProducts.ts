export type TProduct = {
    id: number;
    name: string;
    quantity: number;
    price: number;
    sold: number;
    img: string;
    color: string[];
};

export type Seller = {
    id: number;
    firstname: string;
    lastname: string;
    email: string;
};
