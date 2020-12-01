import { ActionCreator } from "@reduxjs/toolkit";
import React from "react";
import { IProduct, ProductActionTypes } from "../../store/types/product.types";
import { Header } from "../AppBar/Header";
import { Footer } from "../Footer/Footer";
import { Product } from "../Product/Product";
import { SCProductList } from "./ProductList.style";

interface IProductListProps {
  products: IProduct[];
  addProductToCart: ActionCreator<ProductActionTypes>;
}

export const ProductList: React.FunctionComponent<IProductListProps> = ({
  products,
  addProductToCart,
}) => {
  const onAddToCart = ({
    productId,
    imageURL,
    productName,
    productPrice,
  }: IProduct) => {
    addProductToCart({
      productId,
      imageURL,
      productName,
      productPrice,
    });
  };
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
            onAdd={() =>
              onAddToCart({ productId, imageURL, productName, productPrice })
            }
          />
        ))}
      </SCProductList>
      <Footer />
    </>
  );
};
