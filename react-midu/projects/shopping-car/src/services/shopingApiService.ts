import { API_URL } from "../constants";
import { APIShopProducts } from "../interfaces";

export async function getProducts(){
    const res = await fetch(API_URL);
    const data:(Array<APIShopProducts>) = await res.json();
    return data;
}