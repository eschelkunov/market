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

export interface IFormData {
  id?: number;
  productName: string;
  productPrice: number;
  imageURL: string;
  productsAvailable: number;
}

export interface IProductFormData extends IFormData {
  isProductInCart: boolean;
  productsInCart: number;
  productsAvailable: number;
  productsLack?: number;
}

export interface IProduct {
  id: number;
  productName: string;
  productPrice: number;
  imageURL: string;
  isProductInCart: boolean;
  productsInCart: number;
  productsAvailable: number;
  productsLack?: number;
}

export interface ISetProducts {
  type: typeof SET_PRODUCTS;
  payload: IProduct[];
}

export interface IAddProduct {
  type: typeof ADD_PRODUCT;
  payload: IProduct;
}

export interface IEditProduct {
  type: typeof EDIT_PRODUCT;
  payload: IProduct;
}

interface IRemoveProductFromCart {
  type: typeof REMOVE_PRODUCT_FROM_CART;
  id: number;
}

interface IDeleteProduct {
  type: typeof DELETE_PRODUCT;
  id: number;
}

interface IIncreaseCount {
  type: typeof INCREASE_COUNT;
  id: number;
}

interface IDecreaseCount {
  type: typeof DECREASE_COUNT;
  id: number;
}

interface IBuyProducts {
  type: typeof BUY_PRODUCTS;
  cartProductsIDs: number[];
}

export type ProductActionTypes =
  | ISetProducts
  | IAddProduct
  | IEditProduct
  | IDeleteProduct
  | IRemoveProductFromCart
  | IIncreaseCount
  | IDecreaseCount
  | IBuyProducts;
