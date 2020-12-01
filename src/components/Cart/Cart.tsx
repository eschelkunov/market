import React from "react";
import { IProduct } from "../../store/types/product.types";
import { Header } from "../AppBar/Header";
import { Footer } from "../Footer/Footer";

interface ICartProps {
  productsInCart: IProduct[];
}

export const Cart: React.FunctionComponent<ICartProps> = ({
  productsInCart,
}) => {
  return (
    <>
      <Header title="My Cart" />
      <div>
        <h2>Choosed items:</h2>
        {productsInCart.map(({ productName, productPrice }) => (
          <>
            <div>Product: {productName}</div>
            <div>Price: {productPrice}</div>
          </>
        ))}
      </div>
      <Footer />
    </>
  );
};
