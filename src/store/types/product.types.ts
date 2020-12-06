import {
  FETCH_PRODUCTS,
  ADD_PRODUCT_TO_CART,
  REMOVE_PRODUCT_FROM_CART,
  INCREASE_COUNT,
  DECREASE_COUNT,
} from "../constants";

export interface IProduct {
  productId: number;
  productName: string;
  productPrice: number;
  imageURL: string;
  productCount: number;
}

export interface IProductList {
  products: IProduct[];
}
export interface IFetchProducts {
  type: typeof FETCH_PRODUCTS;
  payload: IProduct[];
}

interface IAddProductToCart {
  type: typeof ADD_PRODUCT_TO_CART;
  payload: IProduct;
}

interface IRemoveProductFromCart {
  type: typeof REMOVE_PRODUCT_FROM_CART;
  productId: number;
}

interface IIncreaseCount {
  type: typeof INCREASE_COUNT;
  productId: number;
}

interface IDecreaseCount {
  type: typeof DECREASE_COUNT;
  productId: number;
}

export type ProductActionTypes =
  | IFetchProducts
  | IAddProductToCart
  | IRemoveProductFromCart
  | IIncreaseCount
  | IDecreaseCount;
