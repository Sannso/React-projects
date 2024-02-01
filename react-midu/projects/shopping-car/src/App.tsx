/*
Ecommerce
 - Muestra una lista de productos json
 - Añade un filtro por categoria
 - Añade un filtro por precio

 Haz uso de useContext para evitar pasar props innecesarias

Shopping Cart

 - Haz que se puedan añadir los productos a un carrito
 - Haz que se puedan eliminar los productos del carrito
 - Haz que se puedan modificar la cantidad de productos del carrito
 - Sincroniza los cambios del carrito con la lista de productos
 - Guarda en el localStorage el carrito para que se recupere al recargar la pagina

*/

import { useEffect, useState } from "react";
import { Products } from "./components/products";
import { getProducts } from "./services/shopingApiService";
import { APIShopProducts } from "./interfaces";

function App() {
  const [products, setProducts] = useState<Array<APIShopProducts>>([])
  const [loading, setLoading] = useState(false)

  const getProductsFromService = async ()=>{
    await getProducts().then(data => setProducts(data))
    setLoading(false)
  }

  useEffect(() =>{
    setLoading(true)
    getProductsFromService()
  }, [])

  return (
    <>
      <header className="flex justify-end text-white mx-0 my-auto w-full p-4">
        <article>carrito</article>
      </header>
      <main className="flex flex-col items-center">
        <h1 className="text-3xl font-bold text-white">Shopping</h1>
        {
          loading ? <p>Loading Data</p>
          :<Products products={products}></Products>
        }
      </main>
    </>
    //footer
  );
}

export default App;
