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
      productCount: 0,
    },
    {
      productId: 2,
      productName: "Coffe with Milk",
      productPrice: 340,
      imageURL:
        "https://onlinejpgtools.com/images/examples-onlinejpgtools/coffee-resized.jpg",
      productCount: 0,
    },
    {
      productId: 3,
      productName: "Capuccino",
      productPrice: 210,
      imageURL:
        "https://onlinejpgtools.com/images/examples-onlinejpgtools/coffee-resized.jpg",
      productCount: 0,
    },
    {
      productId: 4,
      productName: "Chocolate",
      productPrice: 230,
      imageURL:
        "https://onlinejpgtools.com/images/examples-onlinejpgtools/coffee-resized.jpg",
      productCount: 0,
    },
    {
      productId: 5,
      productName: "Latte",
      productPrice: 400,
      imageURL:
        "https://onlinejpgtools.com/images/examples-onlinejpgtools/coffee-resized.jpg",
      productCount: 0,
    },
    {
      productId: 6,
      productName: "Americano",
      productPrice: 505,
      imageURL:
        "https://onlinejpgtools.com/images/examples-onlinejpgtools/coffee-resized.jpg",
      productCount: 0,
    },
    {
      productId: 7,
      productName: "Black Tea",
      productPrice: 100,
      imageURL:
        "https://onlinejpgtools.com/images/examples-onlinejpgtools/coffee-resized.jpg",
      productCount: 0,
    },
    {
      productId: 8,
      productName: "Tea with Lemon",
      productPrice: 100,
      imageURL:
        "https://onlinejpgtools.com/images/examples-onlinejpgtools/coffee-resized.jpg",
      productCount: 0,
    },
    {
      productId: 9,
      productName: "Green Tea",
      productPrice: 100,
      imageURL:
        "https://onlinejpgtools.com/images/examples-onlinejpgtools/coffee-resized.jpg",
      productCount: 0,
    },
  ],
  productsInCart: [],
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
      return {
        ...state,
        productsInCart: [...state.productsInCart, action.payload],
      };
    case REMOVE_PRODUCT_FROM_CART:
      return {
        ...state,
        productsInCart: state.productsInCart.filter(
          (product) => product.productId !== action.productId
        ),
      };
    case INCREASE_COUNT:
      const indexIncr = state.productsInCart.findIndex(
        (product) => product.productId === action.productId
      );
      const productsInCartIncr = [...state.productsInCart];
      productsInCartIncr[indexIncr].productCount += 1;
      return {
        ...state,
        productsInCart: productsInCartIncr,
      };
    case DECREASE_COUNT:
      const indexDecr = state.productsInCart.findIndex(
        (product) => product.productId === action.productId
      );
      const productsInCartDecr = [...state.productsInCart];
      productsInCartDecr[indexDecr].productCount -= 1;
      return {
        ...state,
        productsInCart: productsInCartDecr,
      };
    default:
      return state;
  }
};
