import { useContext } from "react";
import { AddCartIcon } from "../icons/productIcons";
import { APIShopProducts } from "../interfaces";
import { CartContext } from "../appContext";

interface Props {
  product: APIShopProducts;
}

export function CardProduct({ product }: Props) {

  const {addCart} = useContext(CartContext)

  const addToCart = () =>{
    addCart({product})
  }

  return (
    <article className="flex flex-col justify-around rounded-lg h-[340px] w-52 bg-gray-900 p-1 px-3 mx-auto my-0 shadow-xl">
      <img
        className="rounded-md aspect-square block object-cover w-full mx-auto my-0"
        src={product.image}
        alt={`Imagen del producto ${product.title}`}
      />
      <main className="flex flex-col gap-3">
        <header className="text-white text-sm font-bold text-ellipsis line-clamp-2">
          {product.title}
        </header>
        <section className="flex text-white text-sm justify-between">
          <p>{`Precio: ${product.price}`}</p>
          <p>{product.category}</p>
        </section>
        <footer className="flex justify-center text-white w-full">
          <button onClick={addToCart} className="bg-slate-800 p-1 px-3 rounded-lg hover:bg-slate-300 hover:text-yellow-500">
            <AddCartIcon/>
          </button>
        </footer>
      </main>
    </article>
  );
}
