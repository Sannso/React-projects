import { APIShopProducts } from "../interfaces";
import { CardProduct } from "./cardProduct";

interface Props {
  products: Array<APIShopProducts>;
}

export function Products({ products }: Props) {
  return (
    <section className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] mt-10 
    gap-5 w-full">
      {products &&
        products.map((product) => {
          return <CardProduct product={product}></CardProduct>;
        })}
    </section>
  );
}
