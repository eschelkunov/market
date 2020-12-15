import { Reducer } from "redux";
import {
  ADD_PRODUCT,
  BUY_PRODUCTS,
  DECREASE_COUNT,
  DELETE_PRODUCT,
  EDIT_PRODUCT,
  INCREASE_COUNT,
  REMOVE_PRODUCT_FROM_CART,
  SET_PRODUCTS,
} from "../constants";
import { ProductActionTypes } from "../types/product.types";
import { IStore } from "../types/store.types";

const initialState: IStore = {
  products: [],
};

export const productReducer: Reducer<IStore, ProductActionTypes> = (
  state = initialState,
  action
): IStore => {
  switch (action.type) {
    case SET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    case EDIT_PRODUCT:
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === action.payload.id ? action.payload : product
        ),
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        products: state.products.filter((product) => product.id !== action.id),
      };
    case REMOVE_PRODUCT_FROM_CART:
      const indexToRemove = state.products.findIndex(
        (product) => product.id === action.id
      );
      const productsCopyRm = [...state.products];
      productsCopyRm[indexToRemove].isProductInCart = false;
      productsCopyRm[indexToRemove].productsInCart = 0;
      return {
        ...state,
        products: productsCopyRm,
      };
    case INCREASE_COUNT:
      const indexIncr = state.products.findIndex(
        (product) => product.id === action.id
      );
      const productsInCartIncr = [...state.products];
      productsInCartIncr[indexIncr].isProductInCart = true;
      productsInCartIncr[indexIncr].productsInCart += 1;
      return {
        ...state,
        products: productsInCartIncr,
      };
    case DECREASE_COUNT:
      const indexDecr = state.products.findIndex(
        (product) => product.id === action.id
      );
      const productsInCartDecr = [...state.products];
      productsInCartDecr[indexDecr].productsInCart -= 1;
      return {
        ...state,
        products: productsInCartDecr,
      };
    case BUY_PRODUCTS:
      const indexes: number[] = [];
      const productsCopy = [...state.products];
      //getting product indexes in a whole products by id that user bought:
      action.cartProductsIDs.forEach((id) => {
        indexes.push(state.products.findIndex((product) => product.id === id));
      });
      /* for every index we're increasing/decreasing counters 
      and if user is buying more then available - we set productsLack flag for admin(operator)*/
      indexes.forEach((index: number) => {
        if (
          productsCopy[index].productsAvailable >=
          productsCopy[index].productsInCart
        ) {
          productsCopy[index].productsAvailable -=
            productsCopy[index].productsInCart;
        } else {
          productsCopy[index].productsLack =
            productsCopy[index].productsAvailable -
            productsCopy[index].productsInCart;
          productsCopy[index].productsAvailable = 0;
        }
        productsCopy[index].productsInCart = 0;
        productsCopy[index].isProductInCart = false;
      });
      return {
        ...state,
        products: productsCopy,
      };
    default:
      return state;
  }
};
