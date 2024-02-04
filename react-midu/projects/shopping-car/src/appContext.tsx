import { createContext, useState } from "react";
import { ContextFilter, Filters } from "./interfaces";
import { InitStateProduct } from "./states/productInitState";
import { IContextCart, IContextFilter } from "./states/contextInitState";
import { useCartReducer } from "./hooks/useCartReducer";

// Crear el contexto
export const FilterContext = createContext<ContextFilter>(IContextFilter);
// Este es el que nos provee de acceso al contexto
export function FiltersProvider({ children }: { children: JSX.Element }) {
  const [filters, setFilters] = useState<Filters>(InitStateProduct);

  return (
    <FilterContext.Provider
      value={{
        filters,
        setFilters,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}

export const CartContext = createContext(IContextCart);

export function CartProvider({ children }: { children: JSX.Element }) {
  const {cart, addCart, removeFromCart, clearCart} = useCartReducer()

  return (
    <CartContext.Provider
      value={{
        cart,
        addCart,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
