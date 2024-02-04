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
import { CartProvider } from "./appContext";
import { Cart } from "./components/cart";
import { Filters } from "./components/filters";
import { Products } from "./components/products";
import { useProducts } from "./hooks/productsHook";
function App() {
  const { products, loading } = useProducts();

  return (
    <CartProvider>
      <>
        <header className="flex justify-end text-white mx-0 my-auto w-full p-4">
          <Cart></Cart>
        </header>
        <main className="flex flex-col items-center">
          <h1 className="text-3xl font-bold text-white">Shopping</h1>
          <Filters></Filters>
          {loading ? (
            <p className="text-white text-xl mt-20">Loading Data</p>
          ) : (
            <Products products={products}></Products>
          )}
        </main>
      </>
    </CartProvider>
    //footer
  );
}

export default App;
