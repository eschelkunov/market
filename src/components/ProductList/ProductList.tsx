import React from "react";
import { useHistory } from "react-router-dom";
import { IProduct } from "../../store/types/product.types";
import { Header } from "../AppBar/Header";
import { CART } from "../AppRoutes";
import { Footer } from "../Footer/Footer";
import { Product } from "../Product/Product";
import { SCProductList, SCContentWrapper } from "./ProductList.style";

interface IProductListProps {
  products: IProduct[];
  productsInCart: IProduct[];
  addProductToCart: ({ ...props }: IProduct) => void;
  increaseCount: (productId: number) => void;
}

export const ProductList: React.FunctionComponent<IProductListProps> = ({
  products,
  productsInCart,
  addProductToCart,
  increaseCount,
}) => {
  const history = useHistory();
  const isItemAlreadyInCart = (id: number) =>
    productsInCart.some((product) => product.productId === id);

  const onAddToCart = ({
    productId,
    imageURL,
    productName,
    productPrice,
    productCount,
  }: IProduct) => {
    if (isItemAlreadyInCart(productId)) {
      history.push(CART);
    } else {
      addProductToCart({
        productId,
        imageURL,
        productName,
        productPrice,
        productCount,
      });
      increaseCount(productId); //use async await when connecting server
    }
  };

  return (
    <>
      <Header />
      <SCContentWrapper>
        <SCProductList>
          {products.map(
            ({
              productId,
              imageURL,
              productName,
              productPrice,
              productCount,
            }) => (
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
                    productCount,
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
