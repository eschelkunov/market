import { IStore } from "../types/store.types";
import { createSelector } from "reselect";

export const getProducts = (state: IStore) => {
  return state.products;
};

export const getProductsInCart = createSelector(getProducts, (products) => {
  return products.filter((product) => product.isProductInCart);
});
