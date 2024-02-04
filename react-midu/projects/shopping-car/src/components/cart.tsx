import { CartIcon } from "../icons/productIcons";
import { useContext } from "react";
import { CartContext } from "../appContext";
import "./cart.css";
import { CardItem } from "./cartItem";

export function Cart() {
  const { cart } = useContext(CartContext);
  return (
    <>
      <label
        className="p-2.5 rounded-full bg-slate-800 hover:bg-slate-300 hover:text-yellow-900 z-10"
        htmlFor="display-cart"
      >
        <CartIcon />
      </label>

      <input type="checkbox" id="display-cart" hidden />
      <section
        id="div-cart"
        className="hidden flex-col items-center h-full bg-zinc-900 p-4 w-64 z-0 rounded-lg top-9 right-9 "
      >
        <header className="flex justify-center gap-2 items-center w-full">
          <h1 className="text-white font-bold text-2xl">CART</h1>
        </header>

        {cart && (
          <section className="flex flex-col w-full items-center gap-4">
            {cart.map((cartProduct) => {
              return (
                <CardItem
                  key={cartProduct.product.id}
                  product={cartProduct.product}
                  quantity={cartProduct.quantity}
                ></CardItem>
              );
            })}
          </section>
        )}
      </section>
    </>
  );
}
