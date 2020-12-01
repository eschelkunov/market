import { FETCH_PRODUCTS, ADD_PRODUCT_TO_CART } from "../constants";

export interface IProduct {
  productId: number;
  productName: string;
  productPrice: number;
  imageURL: string;
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

export type ProductActionTypes = IFetchProducts | IAddProductToCart;
