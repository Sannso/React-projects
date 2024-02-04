import { CartProduct } from "../interfaces";


const localStorage = window.localStorage.getItem('cart')
export const InitStateCart = JSON.parse(localStorage!) || <Array<CartProduct>>[]
