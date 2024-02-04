import { useReducer } from "react";
import { cartReducer } from "../reducers/cartReducer";
import { InitStateCart } from "../states/cartInitState";
import { APIShopProducts } from "../interfaces";

interface CartProps {
    product: APIShopProducts;
  }

export function useCartReducer(){
    // const [cart, setCart] = useState(InitStateCart);
  const [cart, dispatch] = useReducer(cartReducer, InitStateCart);

  const addCart = ({ product }: CartProps) =>
    dispatch({
      type: "ADD_PRODUCT_CART",
      payload: { product },
    });

  const removeFromCart = ({ product }: CartProps) =>
    dispatch({
      type: "REMOVE_PRODUCT_CART",
      payload: { product },
    });

  const clearCart = () =>
    dispatch({
      type: "CLEAR_CART",
      payload: undefined,
    });

    return {cart, addCart, removeFromCart, clearCart}
}