import Button from "@material-ui/core/Button/Button";
import React from "react";
import { SCProduct } from "./Product.style";

interface IProductProps {
  imageURL: string;
  productName: string;
  productPrice: number;
  onAdd: () => void;
}

export const Product: React.FunctionComponent<IProductProps> = ({
  imageURL,
  productName,
  productPrice,
  onAdd,
}) => {
  return (
    <SCProduct>
      <img alt={productName} src={imageURL} />
      <p>{productName}</p>
      <p>{"Price " + productPrice + " ₴"}</p>
      <Button onClick={onAdd} variant="contained">
        Add to Cart
      </Button>
    </SCProduct>
  );
};
