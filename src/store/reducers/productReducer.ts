import { Reducer } from "redux";
import {
  // FETCH_PRODUCTS,
  ADD_PRODUCT_TO_CART,
  DECREASE_COUNT,
  INCREASE_COUNT,
  REMOVE_PRODUCT_FROM_CART,
} from "../constants";
import { ProductActionTypes } from "../types/product.types";
import { IStore } from "../types/store.types";

const initialState: IStore = {
  products: [
    {
      productId: 1,
      productName: "Coffe",
      productPrice: 489,
      imageURL:
        "https://onlinejpgtools.com/images/examples-onlinejpgtools/coffee-resized.jpg",
      isProductInCart: false,
      productsInCart: 0,
      productsAvailable: 0,
    },
    {
      productId: 2,
      productName: "Coffe with Milk",
      productPrice: 340,
      imageURL:
        "https://onlinejpgtools.com/images/examples-onlinejpgtools/coffee-resized.jpg",
      isProductInCart: false,
      productsInCart: 0,
      productsAvailable: 0,
    },
    {
      productId: 3,
      productName: "Capuccino",
      productPrice: 210,
      imageURL:
        "https://onlinejpgtools.com/images/examples-onlinejpgtools/coffee-resized.jpg",
      isProductInCart: false,
      productsInCart: 0,
      productsAvailable: 0,
    },
    {
      productId: 4,
      productName: "Chocolate",
      productPrice: 230,
      imageURL:
        "https://onlinejpgtools.com/images/examples-onlinejpgtools/coffee-resized.jpg",
      isProductInCart: false,
      productsInCart: 0,
      productsAvailable: 0,
    },
    {
      productId: 5,
      productName: "Latte",
      productPrice: 400,
      imageURL:
        "https://onlinejpgtools.com/images/examples-onlinejpgtools/coffee-resized.jpg",
      isProductInCart: false,
      productsInCart: 0,
      productsAvailable: 0,
    },
    {
      productId: 6,
      productName: "Americano",
      productPrice: 505,
      imageURL:
        "https://onlinejpgtools.com/images/examples-onlinejpgtools/coffee-resized.jpg",
      isProductInCart: false,
      productsInCart: 0,
      productsAvailable: 0,
    },
    {
      productId: 7,
      productName: "Black Tea",
      productPrice: 100,
      imageURL:
        "https://onlinejpgtools.com/images/examples-onlinejpgtools/coffee-resized.jpg",
      isProductInCart: false,
      productsInCart: 0,
      productsAvailable: 0,
    },
    {
      productId: 8,
      productName: "Tea with Lemon",
      productPrice: 100,
      imageURL:
        "https://onlinejpgtools.com/images/examples-onlinejpgtools/coffee-resized.jpg",
      isProductInCart: false,
      productsInCart: 0,
      productsAvailable: 0,
    },
    {
      productId: 9,
      productName: "Green Tea",
      productPrice: 100,
      imageURL:
        "https://onlinejpgtools.com/images/examples-onlinejpgtools/coffee-resized.jpg",
      isProductInCart: false,
      productsInCart: 0,
      productsAvailable: 0,
    },
  ],
};

export const productReducer: Reducer<IStore, ProductActionTypes> = (
  state = initialState,
  action
): IStore => {
  switch (action.type) {
    // case FETCH_PRODUCTS:
    //   return {
    //     ...state,
    //     products: action.payload,
    //   };
    case ADD_PRODUCT_TO_CART:
      const indexToAdd = state.products.findIndex(
        (product) => product.productId === action.productId
      );
      const productsCopyAdd = [...state.products];
      productsCopyAdd[indexToAdd].isProductInCart = true;
      productsCopyAdd[indexToAdd].productsInCart += 1;
      return {
        ...state,
        products: productsCopyAdd,
      };
    case REMOVE_PRODUCT_FROM_CART:
      const indexToRemove = state.products.findIndex(
        (product) => product.productId === action.productId
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
        (product) => product.productId === action.productId
      );
      const productsInCartIncr = [...state.products];
      productsInCartIncr[indexIncr].productsInCart += 1;
      return {
        ...state,
        products: productsInCartIncr,
      };
    case DECREASE_COUNT:
      const indexDecr = state.products.findIndex(
        (product) => product.productId === action.productId
      );
      const productsInCartDecr = [...state.products];
      productsInCartDecr[indexDecr].productsInCart -= 1;
      return {
        ...state,
        products: productsInCartDecr,
      };
    default:
      return state;
  }
};
