import React from "react";
import { IProduct, ProductActionTypes } from "../../store/types/product.types";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import {
  SCCart,
  SCCartHeader,
  SCProductName,
  SCWrapper,
  SCIndex,
  SCProductPrice,
  SCButton,
  SCSum,
  SCInvisibleCounter,
  SCCartWrapper,
} from "./Cart.style";
import { ActionCreator } from "@reduxjs/toolkit";
import { Header } from "../AppBar/Header";
import { Footer } from "../Footer/Footer";

interface ICartProps {
  productsInCart: IProduct[];
  removeProductFromCart: ActionCreator<ProductActionTypes>;
}

export const Cart: React.FunctionComponent<ICartProps> = ({
  productsInCart,
  removeProductFromCart,
}) => {
  let total = 0;
  return (
    <>
      <Header />
      <SCCartWrapper>
        <SCCart>
          {productsInCart.length ? (
            <>
              <SCCartHeader>You are going to buy next products:</SCCartHeader>
              {productsInCart.map(
                ({ productName, productPrice, productId }, i) => (
                  <div key={productId}>
                    <SCWrapper>
                      <SCIndex>{i + 1}</SCIndex>
                      <SCProductName>{productName}</SCProductName>
                      <SCProductPrice>{productPrice + " UAH"}</SCProductPrice>
                      <HighlightOffIcon
                        onClick={() => removeProductFromCart(productId)}
                      />
                    </SCWrapper>
                    <SCInvisibleCounter>
                      {(total += productPrice)}
                    </SCInvisibleCounter>
                  </div>
                )
              )}
              <SCSum>In Total: {total} UAH</SCSum>
              <SCButton
                onClick={() => alert("Thank you for purchase!")}
                variant="contained"
              >
                Buy
              </SCButton>
            </>
          ) : (
            <SCCartHeader>Your cart is empty</SCCartHeader>
          )}
        </SCCart>
      </SCCartWrapper>
      <Footer />
    </>
  );
};
