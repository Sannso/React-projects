export interface APIShopProducts {
    id:          number;
    title:       string;
    price:       number;
    description: string;
    category:    Category;
    image:       string;
    rating:      Rating;
}

export enum Category {
    Electronics = "electronics",
    Jewelery = "jewelery",
    MenSClothing = "men's clothing",
    WomenSClothing = "women's clothing",
}

export interface Rating {
    rate:  number;
    count: number;
}

export interface Filters {
    category: string;
    price: number;
}

export interface ContextFilter {
    filters:Filters,
    setFilters:React.Dispatch<React.SetStateAction<Filters>>
}

export interface CartProduct {
    product:APIShopProducts,
    quantity:number
}


export interface CartReducer {
    state: Array<CartProduct>;
    action: CartReducerAction;
  }
  
type CartReducerAction =
    | {
        type: "ADD_PRODUCT_CART";
        payload: { product: APIShopProducts };
      }
    | {
        type: "REMOVE_PRODUCT_CART";
        payload: { product: APIShopProducts };
      }
    | {
        type: "CLEAR_CART";
        payload: undefined;
      };
  