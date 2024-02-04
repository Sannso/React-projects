import { useContext, useEffect, useState } from "react";
import { APIShopProducts } from "../interfaces";
import { getProducts } from "../services/shopingApiService";
// import { InitStateProduct } from "../states/productInitState";
import { FilterContext } from "../appContext";

export function useProducts() {
  const [products, setProducts] = useState<Array<APIShopProducts>>([]);
  const [loading, setLoading] = useState(false);
  //const [filter, setFilter] = useState(InitStateProduct);
  const {filters} = useContext(FilterContext)

  const getProductsFromService = async () => {
    await getProducts().then((data) => setProducts(data));
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    getProductsFromService();
  }, []);

  // const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   const { categories, price } = Object.fromEntries(
  //     new window.FormData(event.currentTarget)
  //   ); 
        
  //   const fixCategory = categories ? categories.toString() : 'all'
  //   const fixPrice = price ? parseInt(price.toString()) : 0

  //   console.log("fixes: "+fixCategory, fixPrice)

  //   setFilter({
  //     category: fixCategory,
  //     price: fixPrice,
  //   });
  // };


  const productsFilter = () => {
    return products.filter((product) => {
      return (
        product.price >= filters.price &&
        (product.category === filters.category || filters.category === "all")
      );
    });
  };

  return { products: productsFilter(), loading};
}
