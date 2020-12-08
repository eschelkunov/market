import { Reducer } from "redux";
import {
  ADD_PRODUCT,
  ADD_PRODUCT_TO_CART,
  BUY_PRODUCTS,
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
      productsAvailable: 10,
    },
    {
      productId: 2,
      productName: "Coffe with Milk",
      productPrice: 340,
      imageURL:
        "https://onlinejpgtools.com/images/examples-onlinejpgtools/coffee-resized.jpg",
      isProductInCart: false,
      productsInCart: 0,
      productsAvailable: 5,
    },
    {
      productId: 3,
      productName: "Capuccino",
      productPrice: 210,
      imageURL:
        "https://onlinejpgtools.com/images/examples-onlinejpgtools/coffee-resized.jpg",
      isProductInCart: false,
      productsInCart: 0,
      productsAvailable: 20,
    },
    {
      productId: 4,
      productName: "Chocolate",
      productPrice: 230,
      imageURL:
        "https://onlinejpgtools.com/images/examples-onlinejpgtools/coffee-resized.jpg",
      isProductInCart: false,
      productsInCart: 0,
      productsAvailable: 3,
    },
    {
      productId: 5,
      productName: "Latte",
      productPrice: 400,
      imageURL:
        "https://onlinejpgtools.com/images/examples-onlinejpgtools/coffee-resized.jpg",
      isProductInCart: false,
      productsInCart: 0,
      productsAvailable: 1,
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
      productsAvailable: 4,
    },
    {
      productId: 8,
      productName: "Tea with Lemon",
      productPrice: 100,
      imageURL:
        "https://onlinejpgtools.com/images/examples-onlinejpgtools/coffee-resized.jpg",
      isProductInCart: false,
      productsInCart: 0,
      productsAvailable: 2,
    },
    {
      productId: 9,
      productName: "Green Tea",
      productPrice: 100,
      imageURL:
        "https://onlinejpgtools.com/images/examples-onlinejpgtools/coffee-resized.jpg",
      isProductInCart: false,
      productsInCart: 0,
      productsAvailable: 11,
    },
  ],
};

export const productReducer: Reducer<IStore, ProductActionTypes> = (
  state = initialState,
  action
): IStore => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload],
      };
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
    case BUY_PRODUCTS:
      const indexes: number[] = [];
      const productsCopy = [...state.products];
      //getting product indexes in a whole products by id that user bought:
      action.cartProductsIDs.forEach((id) => {
        indexes.push(
          state.products.findIndex((product) => product.productId === id)
        );
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
