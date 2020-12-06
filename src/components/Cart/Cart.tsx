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
  productsInCart: IProduct[];
  removeProductFromCart: (productId: number) => void;
  increaseCount: (productId: number) => void;
  decreaseCount: (productId: number) => void;
}

export const Cart: React.FunctionComponent<ICartProps> = ({
  productsInCart,
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
          {productsInCart.length ? (
            <>
              <SCCartHeader>You are going to buy next products:</SCCartHeader>
              {productsInCart.map(
                ({ productName, productPrice, productId, productCount }, i) => (
                  <div key={productId}>
                    <SCWrapper>
                      <CartItem
                        index={i}
                        productName={productName}
                        productPrice={productPrice}
                        productId={productId}
                        removeProductFromCart={removeProductFromCart}
                        productCount={productCount}
                        increaseCount={increaseCount}
                        decreaseCount={decreaseCount}
                      />
                    </SCWrapper>
                    <SCInvisibleCounter>
                      {(total += productPrice)}
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
