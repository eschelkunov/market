import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { IProduct } from "../../store/types/product.types";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
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
import { GOODS } from "../AppRoutes";
import { MUIAlert } from "../Alert/Alert";

interface ICartProps {
  cartProducts: IProduct[];
  removeProductFromCart: (id: number) => void;
  increaseProductCount: (id: number) => void;
  decreaseProductCount: (id: number) => void;
  buyProducts: (products: number[]) => void;
  cartProductsIDs: number[];
}

export const Cart: React.FunctionComponent<ICartProps> = ({
  cartProducts,
  cartProductsIDs,
  removeProductFromCart,
  increaseProductCount,
  decreaseProductCount,
  buyProducts,
}) => {
  const [showAlert, setShowAlert] = useState(false);
  const alertMessage =
    "Thank you for purchase! Our managers will contact you as soon as possible!";
  const history = useHistory();
  let total = 0;

  const handleAlertClose = () => {
    setShowAlert(false);
  };

  const onBuy = () => {
    buyProducts(cartProductsIDs);
    setShowAlert(true);
  };

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
                  {
                    id,
                    productName,
                    productPrice,
                    productsInCart,
                    productsAvailable,
                  },
                  i
                ) => (
                  <div key={id}>
                    <SCWrapper>
                      <CartItem
                        index={i}
                        id={id}
                        productName={productName}
                        productPrice={productPrice}
                        productsInCart={productsInCart}
                        productsAvailable={productsAvailable}
                        increaseProductCount={increaseProductCount}
                        decreaseProductCount={decreaseProductCount}
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
                <SCButton onClick={onBuy} variant="contained" color="primary">
                  Buy
                </SCButton>
              </SCFlexWrapper>
            </>
          ) : (
            <>
              <SCCartHeader>Your cart is empty</SCCartHeader>
              <MUIAlert
                showAlert={showAlert}
                handleAlertClose={handleAlertClose}
                message={alertMessage}
                severity={"success"}
              />
              <SCButton
                type="button"
                variant="contained"
                color="primary"
                onClick={() => history.push(GOODS)}
              >
                <ArrowBackIosIcon
                  fontSize="inherit"
                  style={{ color: "white" }}
                />
                Back
              </SCButton>
            </>
          )}
        </SCCart>
      </SCCartWrapper>
      <Footer />
    </>
  );
};
