import React from "react";
import { IProduct } from "../../store/types/product.types";
import {
  SCCart,
  SCCartHeader,
  SCWrapper,
  SCButton,
  SCSum,
  SCInvisibleCounter,
  SCCartWrapper,
  SCFlexWrapper,
} from "./Cart.style";
import { Header } from "../AppBar/Header";
import { Footer } from "../Footer/Footer";
import { CartItem } from "./CartItem";

interface ICartProps {
  cartProducts: IProduct[];
  removeProductFromCart: (productId: number) => void;
  increaseCount: (productId: number) => void;
  decreaseCount: (productId: number) => void;
}

export const Cart: React.FunctionComponent<ICartProps> = ({
  cartProducts,
  removeProductFromCart,
  increaseCount,
  decreaseCount,
}) => {
  let total = 0;

  return (
    <>
      <Header />
      <SCCartWrapper>
        <SCCart>
          {cartProducts.length ? (
            <>
              <SCCartHeader>You are going to buy next products:</SCCartHeader>
              {cartProducts.map(
                (
                  { productName, productPrice, productId, productsInCart, productsAvailable },
                  i
                ) => (
                  <div key={productId}>
                    <SCWrapper>
                      <CartItem
                        index={i}
                        productId={productId}
                        productName={productName}
                        productPrice={productPrice}
                        productsInCart={productsInCart}
                        productsAvailable={productsAvailable}
                        increaseCount={increaseCount}
                        decreaseCount={decreaseCount}
                        removeProductFromCart={removeProductFromCart}
                      />
                    </SCWrapper>
                    <SCInvisibleCounter>
                      {(total += productPrice * productsInCart)}
                    </SCInvisibleCounter>
                  </div>
                )
              )}
              <SCFlexWrapper>
                <SCSum>In Total: {total} UAH</SCSum>
                <SCButton
                  onClick={() => alert("Thank you for purchase!")}
                  variant="contained"
                  color="primary"
                >
                  Buy
                </SCButton>
              </SCFlexWrapper>
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
