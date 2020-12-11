import {
  ADD_PRODUCT,
  ADD_PRODUCT_TO_CART,
  REMOVE_PRODUCT_FROM_CART,
  INCREASE_COUNT,
  DECREASE_COUNT,
  BUY_PRODUCTS,
  SET_PRODUCTS,
} from "../constants";
import { IProduct, IProductFormData, ProductActionTypes } from "../types/product.types";
import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { IStore } from "../types/store.types";
import { API } from "../../api/requests";

const setProducts = (products: IProduct[]): ProductActionTypes => ({
  type: SET_PRODUCTS,
  payload: products,
});

const addNewProduct = (product: IProduct): ProductActionTypes => ({
  type: ADD_PRODUCT,
  payload: product,
});

export const addProductToCart = (id: number): ProductActionTypes => ({
  type: ADD_PRODUCT_TO_CART,
  id,
});

export const removeProductFromCart = (id: number): ProductActionTypes => ({
  type: REMOVE_PRODUCT_FROM_CART,
  id,
});

export const increaseCount = (id: number): ProductActionTypes => ({
  type: INCREASE_COUNT,
  id,
});

export const decreaseCount = (id: number): ProductActionTypes => ({
  type: DECREASE_COUNT,
  id,
});

export const buyProducts = (cartProductsIDs: number[]): ProductActionTypes => ({
  type: BUY_PRODUCTS,
  cartProductsIDs,
});

// Thunks

export const fetchProducts = (): ThunkAction<
  void,
  IStore,
  unknown,
  Action<string>
> => async (dispatch) => {
  const resp = await API.getProducts();
  dispatch(setProducts(resp?.data));
};

export const addProduct = (
  product: IProductFormData
): ThunkAction<void, IStore, unknown, Action<string>> => async (dispatch) => {
  const resp = await API.addProduct(product);
  dispatch(addNewProduct(resp?.data));
};
