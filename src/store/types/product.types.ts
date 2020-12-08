import {
  ADD_PRODUCT,
  ADD_PRODUCT_TO_CART,
  REMOVE_PRODUCT_FROM_CART,
  INCREASE_COUNT,
  DECREASE_COUNT,
  BUY_PRODUCTS,
} from "../constants";

export interface IFormProduct {
  productId: number;
  productName: string;
  productPrice: number;
  imageURL: string;
  productsAvailable: number;
}

export interface IProduct {
  productId: number;
  productName: string;
  productPrice: number;
  imageURL: string;
  isProductInCart: boolean;
  productsInCart: number;
  productsAvailable: number;
  productsLack?: number;
}

export interface IAddProduct {
  type: typeof ADD_PRODUCT;
  payload: IProduct;
}

interface IAddProductToCart {
  type: typeof ADD_PRODUCT_TO_CART;
  productId: number;
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

interface IBuyProducts {
  type: typeof BUY_PRODUCTS;
  cartProductsIDs: number[];
}

export type ProductActionTypes =
  | IAddProduct
  | IAddProductToCart
  | IRemoveProductFromCart
  | IIncreaseCount
  | IDecreaseCount
  | IBuyProducts;
