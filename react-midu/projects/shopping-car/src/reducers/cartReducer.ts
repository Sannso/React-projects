import { APIShopProducts, CartProduct, CartReducer } from "../interfaces";
import { InitStateCart } from "../states/cartInitState";

const updateLocalStorage = (state: CartProduct[]) => {
  window.localStorage.setItem("cart", JSON.stringify(state));
};

//Use reducer
export const cartReducer = (
  state: CartReducer["state"],
  action: CartReducer["action"]
) => {
  //state es el estado que vendria a ser el cart del useState
  //action es la accion type -> es el caso y payload es la info que traer
  const { type: actionType, payload: actionPayload } = action;

  const addNewProduct = ({ product }: { product: APIShopProducts }) => {
    const newState = [
      ...state,
      {
        product,
        quantity: 1,
      },
    ];
    updateLocalStorage(newState);
    return newState;
  };

  switch (actionType) {
    case "ADD_PRODUCT_CART": {
      const { product } = actionPayload;

      let isNew = true;
      let newCart = InitStateCart;
      if (state.length > 0) {
        newCart = state.map((cartProduct) => {
          if (cartProduct.product.id === product.id) {
            isNew = false;
            const editCartProduct = cartProduct;
            editCartProduct.quantity += 1;
            return editCartProduct;
          } else {
            return cartProduct;
          }
        });
      }

      //Logica para setear el cart
      updateLocalStorage(newCart);
      if (isNew) return addNewProduct({ product });
      else {
        return newCart;
      }
      //
    }

    case "REMOVE_PRODUCT_CART": {
      const { product } = actionPayload;
      const newCart = state.filter((cartProduct) => {
        return cartProduct.product.id !== product.id;
      });

      updateLocalStorage(newCart)
      return newCart;
    }

    case "CLEAR_CART": {
      updateLocalStorage(InitStateCart)
      return InitStateCart;
    }
  }

  return state;
};
