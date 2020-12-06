import { IStore } from "../types/store.types";

export const getProducts = (state: IStore) => {
  return state.products;
};

export const getProductsInCart = (state: IStore) => {
  return state.productsInCart;
};

// export const getProductCount = (state: IStore) => {
//   return state.productCount;
// };
