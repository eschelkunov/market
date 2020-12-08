import {
  ADD_PRODUCT,
  ADD_PRODUCT_TO_CART,
  REMOVE_PRODUCT_FROM_CART,
  INCREASE_COUNT,
  DECREASE_COUNT,
  BUY_PRODUCTS,
} from "../constants";
import { IProduct, ProductActionTypes } from "../types/product.types";

export const addProduct = (product: IProduct): ProductActionTypes => ({
  type: ADD_PRODUCT,
  payload: product,
});

export const addProductToCart = (productId: number): ProductActionTypes => ({
  type: ADD_PRODUCT_TO_CART,
  productId,
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
export const buyProducts = (cartProductsIDs: number[]): ProductActionTypes => ({
  type: BUY_PRODUCTS,
  cartProductsIDs,
});
