import React from "react";
import { Header } from "../AppBar/Header";
import { Footer } from "../Footer/Footer";
import { IProductList } from "../interfaces";
import { Product } from "../Product/Product";
import { SCProductList } from "./ProductList.style";

export const ProductList: React.FunctionComponent<IProductList> = ({
  products,
}) => {
  return (
    <>
      <Header title="Goods" />
      <SCProductList>
        {products.map(({ productId, imageURL, productName, productPrice }) => (
          <Product
            key={productId}
            imageURL={imageURL}
            productName={productName}
            productPrice={productPrice}
            onAdd={() => alert("Added to the cart!")}
          />
        ))}
      </SCProductList>
      <Footer />
    </>
  );
};
