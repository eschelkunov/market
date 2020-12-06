import React from "react";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import {
  SCIndex,
  SCProductName,
  SCCartCounter,
  SCCartCounterButton,
  SCCounterInput,
  SCProductPrice,
} from "./Cart.style";

interface ICartItemProps {
  index: number;
  productName: string;
  productId: number;
  productPrice: number;
  removeProductFromCart: (productId: number) => void;
  productCount: number | undefined;
  increaseCount: (productId: number) => void;
  decreaseCount: (productId: number) => void;
}

export const CartItem: React.FunctionComponent<ICartItemProps> = ({
  index,
  productName,
  productPrice,
  productId,
  removeProductFromCart,
  productCount,
  increaseCount,
  decreaseCount,
}) => {
  return (
    <>
      <SCIndex>{index + 1}</SCIndex>
      <SCProductName>{productName}</SCProductName>
      <SCCartCounter>
        <SCCartCounterButton
          disabled={productCount === 1}
          onClick={() => decreaseCount(productId)}
        >
          <RemoveIcon />
        </SCCartCounterButton>
        <SCCounterInput type="text" value={productCount} onChange={() => {}} />
        <SCCartCounterButton onClick={() => increaseCount(productId)}>
          <AddIcon />
        </SCCartCounterButton>
      </SCCartCounter>
      <SCProductPrice>{productPrice + " UAH"}</SCProductPrice>
      <HighlightOffIcon onClick={() => removeProductFromCart(productId)} />
    </>
  );
};
