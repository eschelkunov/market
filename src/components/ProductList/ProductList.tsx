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
  addProductToCart: (productId: number) => void;
}

export const ProductList: React.FunctionComponent<IProductListProps> = ({
  products,
  addProductToCart,
}) => {
  const history = useHistory();

  const onAddToCart = (id: number, alreadyInCart: boolean) => {
    if (alreadyInCart) {
      history.push(CART);
    } else {
      addProductToCart(id);
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
              isProductInCart,
              productsAvailable,
            }) => (
              <Product
                key={productId}
                imageURL={imageURL}
                productName={productName}
                productPrice={productPrice}
                isItemInCart={isProductInCart}
                productsAvailable={productsAvailable}
                onAdd={() => onAddToCart(productId, isProductInCart)}
              />
            )
          )}
        </SCProductList>
      </SCContentWrapper>
      <Footer />
    </>
  );
};
