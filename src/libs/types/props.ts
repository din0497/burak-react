import { CartItem } from "./search";

export interface ProductsPageProps {
    cartItems: CartItem[],
    onAdd: (item: CartItem) => void,
    onRemove: (item: CartItem) => void,
    onDelete: (item: CartItem) => void,
    onDeleteAll: () => void,
    setSignupOpen?: (isOpen: boolean) => void,
    setLoginOpen?: (isOpen: boolean) => void
}

export interface CartItemProp {
    cartItems: CartItem[]
}