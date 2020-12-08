import Button from "@material-ui/core/Button/Button";
import CheckCircleOutlineRoundedIcon from "@material-ui/icons/CheckCircleOutlineRounded";
import BlockIcon from "@material-ui/icons/Block";
import React from "react";
import { SCProduct, SCFlexWrapper, SCIconInCart, SCIconNotAvailable } from "./Product.style";

interface IProductProps {
  imageURL: string;
  productName: string;
  productPrice: number;
  isItemInCart: boolean;
  productsAvailable: number;
  onAdd: () => void;
}

export const Product: React.FunctionComponent<IProductProps> = ({
  imageURL,
  productName,
  productPrice,
  isItemInCart,
  productsAvailable,
  onAdd,
}) => {
  return (
    <SCProduct>
      <img alt={productName} src={imageURL} />
      <p>{productName}</p>
      <p>{"Price: " + productPrice + " UAH"}</p>
      <SCFlexWrapper>
        <Button
          onClick={onAdd}
          variant="contained"
          color="primary"
          disabled={!productsAvailable}
        >
          Add to Cart
        </Button>
        {!productsAvailable && (
          <SCIconNotAvailable>
            <BlockIcon />
          </SCIconNotAvailable>
        )}
        {isItemInCart && (
          <SCIconInCart>
            <CheckCircleOutlineRoundedIcon />
          </SCIconInCart>
        )}
      </SCFlexWrapper>
    </SCProduct>
  );
};
