import { useContext } from "react";
import { APIShopProducts } from "../interfaces";
import { CartContext } from "../appContext";

interface Props {
  product: APIShopProducts;
  quantity: number;
}

export function CardItem({ product, quantity }: Props) {
    const {addCart, removeFromCart} = useContext(CartContext)

  const removeCart = () => {
    removeFromCart({product});
  };

  const addMoreProductCart = () => {
    addCart({product})
  };

  return (
    <article className="flex flex-col justify-around rounded-lg h-[240px] w-52 bg-gray-900 p-1 px-3 mx-auto my-0 shadow-lg">
      <img
        className="rounded-md aspect-video block object-cover w-full mx-auto my-0"
        src={product.image}
        alt={`Imagen del producto ${product.title}`}
      />
      <main className="flex flex-col gap-3">
        <header className="flex gap-2 text-white text-sm font-bold">
          <p className="text-ellipsis line-clamp-2">{product.title}</p>
          <p>{`Precio: ${product.price}`}</p>
        </header>

        <footer className="flex flex-col items-center justify-center text-white w-full gap-2">
          <section className="flex gap-2">
            <p>Qty: {quantity}</p>
            <button
              onClick={addMoreProductCart}
              className=" bg-blue-800 px-2 rounded-lg hover:bg-slate-300 hover:text-yellow-500"
            >
              +
            </button>
          </section>
          <button
              onClick={removeCart}
              className=" bg-red-800 p-1 px-3 rounded-lg hover:bg-slate-300 hover:text-yellow-500"
            >
              remove
            </button>
        </footer>
      </main>
    </article>
  );
}
