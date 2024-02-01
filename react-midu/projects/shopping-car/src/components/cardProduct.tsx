import { APIShopProducts } from "../interfaces";

interface Props {
  product: APIShopProducts;
}

export function CardProduct({ product }: Props) {
  return (
    <article className="flex flex-col justify-between rounded-lg h-[360px] w-52 bg-gray-900 p-3 mx-auto my-0">
      <img
        className="rounded-md h-2/3 w-fit mx-auto my-0"
        src={product.image}
        alt={`Imagen del producto ${product.title}`}
      />
      <main className="flex flex-col mt-2 gap-3">
        <header className="text-white text-sm font-bold text-ellipsis line-clamp-2">
          {product.title}
        </header>
        <section className="flex text-white text-sm justify-between">
          <p>{`Precio: ${product.price}`}</p>
          <p>{product.category}</p>
        </section>
      </main>
    </article>
  );
}
