import {
  ADD_PRODUCT,
  ADD_PRODUCT_TO_CART,
  REMOVE_PRODUCT_FROM_CART,
  INCREASE_COUNT,
  DECREASE_COUNT,
  BUY_PRODUCTS,
  SET_PRODUCTS,
} from "../constants";

export interface IFormData {
  productName: string;
  productPrice: number;
  imageURL: string;
  productsAvailable: number;
}

export interface IProductFormData extends IFormData {
  isProductInCart: boolean;
  productsInCart: number;
  productsAvailable: number;
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

interface IAddProductToCart {
  type: typeof ADD_PRODUCT_TO_CART;
  id: number;
}

interface IRemoveProductFromCart {
  type: typeof REMOVE_PRODUCT_FROM_CART;
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
  | IAddProductToCart
  | IRemoveProductFromCart
  | IIncreaseCount
  | IDecreaseCount
  | IBuyProducts;
