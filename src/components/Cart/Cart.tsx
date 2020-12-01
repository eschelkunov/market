import React from "react";
import { IProduct } from "../../store/types/product.types";

interface ICartProps {
  productsInCart: IProduct[];
}

export const Cart: React.FunctionComponent<ICartProps> = ({
  productsInCart,
}) => {
  return (
    <>
      <h2>Choosed items:</h2>
      {productsInCart.map(({ productName, productPrice }) => (
        <>
          <div>Product: {productName}</div>
          <div>Price: {productPrice}</div>
        </>
      ))}
    </>
  );
};
