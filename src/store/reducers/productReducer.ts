import { Reducer } from "redux";
import { FETCH_PRODUCTS, ADD_PRODUCT_TO_CART } from "../constants";
import { ProductActionTypes } from "../types/product.types";
import { IStore } from "../types/store.types";

const initialState: IStore = {
  products: [
    {
      productId: 1,
      productName: "Some name 1",
      productPrice: 489,
      imageURL:
        "https://onlinejpgtools.com/images/examples-onlinejpgtools/coffee-resized.jpg",
    },
    {
      productId: 2,
      productName: "Some name 2",
      productPrice: 340,
      imageURL:
        "https://onlinejpgtools.com/images/examples-onlinejpgtools/coffee-resized.jpg",
    },
    {
      productId: 3,
      productName: "Some name 3",
      productPrice: 210,
      imageURL:
        "https://onlinejpgtools.com/images/examples-onlinejpgtools/coffee-resized.jpg",
    },
    {
      productId: 4,
      productName: "Some name 4",
      productPrice: 230,
      imageURL:
        "https://onlinejpgtools.com/images/examples-onlinejpgtools/coffee-resized.jpg",
    },
    {
      productId: 5,
      productName: "Some name 5",
      productPrice: 400,
      imageURL:
        "https://onlinejpgtools.com/images/examples-onlinejpgtools/coffee-resized.jpg",
    },
    {
      productId: 6,
      productName: "Some name 6",
      productPrice: 505,
      imageURL:
        "https://onlinejpgtools.com/images/examples-onlinejpgtools/coffee-resized.jpg",
    },
    {
      productId: 7,
      productName: "Some name 7",
      productPrice: 100,
      imageURL:
        "https://onlinejpgtools.com/images/examples-onlinejpgtools/coffee-resized.jpg",
    },
    {
      productId: 8,
      productName: "Some name 7",
      productPrice: 100,
      imageURL:
        "https://onlinejpgtools.com/images/examples-onlinejpgtools/coffee-resized.jpg",
    },
    {
      productId: 9,
      productName: "Some name 7",
      productPrice: 100,
      imageURL:
        "https://onlinejpgtools.com/images/examples-onlinejpgtools/coffee-resized.jpg",
    },
  ],
  productsInCart: [],
};

export const productReducer: Reducer<IStore, ProductActionTypes> = (
  state = initialState,
  action
): IStore => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case ADD_PRODUCT_TO_CART:
      return {
        ...state,
        productsInCart: [...state.productsInCart, action.payload],
      };
    default:
      return state;
  }
};
