import { ActionCreator } from "@reduxjs/toolkit";
import React from "react";
import { useHistory } from "react-router-dom";
import { IProduct, ProductActionTypes } from "../../store/types/product.types";
import { Header } from "../AppBar/Header";
import { CART } from "../AppRoutes";
import { Footer } from "../Footer/Footer";
import { Product } from "../Product/Product";
import { SCProductList, SCContentWrapper } from "./ProductList.style";

interface IProductListProps {
  products: IProduct[];
  productsInCart: IProduct[];
  addProductToCart: ActionCreator<ProductActionTypes>;
}

export const ProductList: React.FunctionComponent<IProductListProps> = ({
  products,
  productsInCart,
  addProductToCart,
}) => {
  const history = useHistory();
  const isItemAlreadyInCart = (id: number) =>
    productsInCart.some((product) => product.productId === id);

  const onAddToCart = ({
    productId,
    imageURL,
    productName,
    productPrice,
  }: IProduct) => {
    if (isItemAlreadyInCart(productId)) {
      history.push(CART);
    } else {
      addProductToCart({
        productId,
        imageURL,
        productName,
        productPrice,
      });
    }
  };

  return (
    <>
      <Header />
      <SCContentWrapper>
        <SCProductList>
          {products.map(
            ({ productId, imageURL, productName, productPrice }) => (
              <Product
                key={productId}
                imageURL={imageURL}
                productName={productName}
                productPrice={productPrice}
                isItemInCart={isItemAlreadyInCart(productId)}
                onAdd={() =>
                  onAddToCart({
                    productId,
                    imageURL,
                    productName,
                    productPrice,
                  })
                }
              />
            )
          )}
        </SCProductList>
      </SCContentWrapper>
      <Footer />
    </>
  );
};
