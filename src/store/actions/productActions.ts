import {
  FETCH_PRODUCTS,
  ADD_PRODUCT_TO_CART,
  REMOVE_PRODUCT_FROM_CART,
  INCREASE_COUNT,
  DECREASE_COUNT,
} from "../constants";
import { IProduct, ProductActionTypes } from "../types/product.types";

export const fetchProducts = (products: IProduct[]): ProductActionTypes => ({
  type: FETCH_PRODUCTS,
  payload: products,
});

export const addProductToCart = (product: IProduct): ProductActionTypes => ({
  type: ADD_PRODUCT_TO_CART,
  payload: product,
});

export const removeProductFromCart = (
  productId: number
): ProductActionTypes => ({
  type: REMOVE_PRODUCT_FROM_CART,
  productId,
});

export const increaseCount = (productId: number): ProductActionTypes => ({
  type: INCREASE_COUNT,
  productId,
});
export const decreaseCount = (productId: number): ProductActionTypes => ({
  type: DECREASE_COUNT,
  productId,
});
