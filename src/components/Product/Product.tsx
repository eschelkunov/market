import Button from "@material-ui/core/Button/Button";
import CheckCircleOutlineRoundedIcon from "@material-ui/icons/CheckCircleOutlineRounded";
import React from "react";
import { SCProduct, SCFlexWrapper, SCIconWrapper } from "./Product.style";

interface IProductProps {
  imageURL: string;
  productName: string;
  productPrice: number;
  isItemInCart: boolean;
  onAdd: () => void;
}

export const Product: React.FunctionComponent<IProductProps> = ({
  imageURL,
  productName,
  productPrice,
  isItemInCart,
  onAdd,
}) => {
  return (
    <SCProduct>
      <img alt={productName} src={imageURL} />
      <p>{productName}</p>
      <p>{"Price: " + productPrice + " ₴"}</p>
      <SCFlexWrapper>
        <Button onClick={onAdd} variant="contained" color="primary">
          Add to Cart
        </Button>
        {isItemInCart && (
          <SCIconWrapper>
            <CheckCircleOutlineRoundedIcon />
          </SCIconWrapper>
        )}
      </SCFlexWrapper>
    </SCProduct>
  );
};
