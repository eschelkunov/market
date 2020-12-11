import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { IProduct } from "../../store/types/product.types";
import { Header } from "../AppBar/Header";
import { CART } from "../AppRoutes";
import { Footer } from "../Footer/Footer";
import { Product } from "../Product/Product";
import { SCProductList, SCContentWrapper } from "./ProductList.style";

interface IProductListProps {
  products: IProduct[];
  addProductToCart: (id: number) => void;
  fetchProducts: () => void;
}

export const ProductList: React.FunctionComponent<IProductListProps> = ({
  products,
  addProductToCart,
  fetchProducts,
}) => {
  const history = useHistory();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

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
              id,
              imageURL,
              productName,
              productPrice,
              isProductInCart,
              productsAvailable,
            }) => (
              <Product
                key={id}
                imageURL={imageURL}
                productName={productName}
                productPrice={productPrice}
                isItemInCart={isProductInCart}
                productsAvailable={productsAvailable}
                onAdd={() => onAddToCart(id, isProductInCart)}
              />
            )
          )}
        </SCProductList>
      </SCContentWrapper>
      <Footer />
    </>
  );
};
