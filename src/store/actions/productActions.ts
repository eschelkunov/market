import {
  ADD_PRODUCT,
  REMOVE_PRODUCT_FROM_CART,
  INCREASE_COUNT,
  DECREASE_COUNT,
  BUY_PRODUCTS,
  SET_PRODUCTS,
  EDIT_PRODUCT,
  DELETE_PRODUCT,
} from "../constants";
import {
  IProduct,
  IProductFormData,
  ProductActionTypes,
} from "../types/product.types";
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

const editExistingProduct = (product: IProduct): ProductActionTypes => ({
  type: EDIT_PRODUCT,
  payload: product,
});

const deleteExistingProduct = (id: number): ProductActionTypes => ({
  type: DELETE_PRODUCT,
  id,
});

const removeCartProduct = (id: number): ProductActionTypes => ({
  type: REMOVE_PRODUCT_FROM_CART,
  id,
});

const increaseCount = (id: number): ProductActionTypes => ({
  type: INCREASE_COUNT,
  id,
});

const decreaseCount = (id: number): ProductActionTypes => ({
  type: DECREASE_COUNT,
  id,
});

export const buyCartProducts = (
  cartProductsIDs: number[]
): ProductActionTypes => ({
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
  resp?.status === 200 && dispatch(setProducts(resp?.data));
};

export const addProduct = (
  product: IProductFormData
): ThunkAction<any, IStore, unknown, Action<string>> => async (dispatch) => {
  const resp = await API.addProduct(product);
  resp?.status === 201 && dispatch(addNewProduct(resp?.data));
  return resp;
};

export const editProduct = (
  product: IProductFormData
): ThunkAction<any, IStore, unknown, Action<string>> => async (dispatch) => {
  const resp = await API.editProduct(product);
  resp?.status === 200 && dispatch(editExistingProduct(resp?.data));
  return resp;
};

export const deleteProduct = (
  id: number
): ThunkAction<any, IStore, unknown, Action<string>> => async (dispatch) => {
  const resp = await API.deleteProduct(id);
  resp?.status === 200 && dispatch(deleteExistingProduct(id));
  return resp;
};

export const increaseProductCount = (
  id: number
): ThunkAction<void, IStore, unknown, Action<string>> => async (
  dispatch,
  getState
) => {
  dispatch(increaseCount(id));
  const updatedProduct = getState().products.find((el) => el.id === id);
  const resp = updatedProduct && (await API.editProduct(updatedProduct));
  if (resp?.status !== 200) {
    dispatch(decreaseCount(id));
  }
};

export const decreaseProductCount = (
  id: number
): ThunkAction<void, IStore, unknown, Action<string>> => async (
  dispatch,
  getState
) => {
  dispatch(decreaseCount(id));
  const updatedProduct = getState().products.find((el) => el.id === id);
  const resp = updatedProduct && (await API.editProduct(updatedProduct));
  if (resp?.status !== 200) {
    dispatch(increaseCount(id));
  }
};

export const removeProductFromCart = (
  id: number
): ThunkAction<void, IStore, unknown, Action<string>> => async (
  dispatch,
  getState
) => {
  dispatch(removeCartProduct(id));
  const updatedProduct = getState().products.find((el) => el.id === id);
  const resp = updatedProduct && (await API.editProduct(updatedProduct));
  if (resp?.status !== 200) {
    dispatch(increaseCount(id));
  }
};

export const buyProducts = (
  ids: number[]
): ThunkAction<void, IStore, unknown, Action<string>> => async (
  dispatch,
  getState
) => {
  dispatch(buyCartProducts(ids));
  const productsToUpdate: any[] = ids.map((id) =>
    getState().products.find((product) => product.id === id)
  );
  for (let product of productsToUpdate) {
    await API.editProduct(product);
  }
};
