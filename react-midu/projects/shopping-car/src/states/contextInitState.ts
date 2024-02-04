import { InitStateCart } from "./cartInitState";
import { InitStateProduct } from "./productInitState";
import { APIShopProducts } from "../interfaces";

export const IContextFilter = {
    filters: InitStateProduct,
    setFilters: () => {}
}

export const IContextCart = {
    cart: InitStateCart,
    addCart: ({product}:{product:APIShopProducts}) => {product},
    removeFromCart: ({product}:{product:APIShopProducts}) => {product},
    clearCart: () => {}
}

