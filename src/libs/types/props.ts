import { CartItem } from "./search";

export interface ProductsPageProps {
    onAdd: (item: CartItem) => void;
}

export interface CartItemProp {
    cartItems: CartItem[]
}