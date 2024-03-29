import { IStore } from "../types/store.types";
import { createSelector } from "reselect";

export const getProducts = (state: IStore) => {
  return state.products;
};

export const getProductsInCart = createSelector(getProducts, (products) => {
  return products.filter((product) => product.isProductInCart);
});

export const getProductsInCartIDs = createSelector(
  getProductsInCart,
  (products) => {
    return products.map((product) => product.id);
  }
);

export const getProductsLack = createSelector(getProducts, (products) => {
  return products.filter(
    (product) =>
      Number(product.productsLack) || Number(product.productsAvailable) === 0
  );
});
