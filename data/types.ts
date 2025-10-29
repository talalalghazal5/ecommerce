import { IconProp } from "@fortawesome/fontawesome-svg-core";

export type Category = {
    id: string;
    title: string;
    href: string;
    description: string;
    colorClass: string;
    color: string;
    icon?: IconProp | undefined;
};

export type Product = {
    id: string;
    title: string;
    href: string;
    price: number;
    description: string;
    imagepath: string;
}

export type CartItem = {
    id: string;
    product: Product;
    quantity: number;
}