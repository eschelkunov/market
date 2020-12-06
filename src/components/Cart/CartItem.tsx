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
  productId: number;
  productName: string;
  productPrice: number;
  productsInCart: number;
  productsAvailable: number;
  increaseCount: (productId: number) => void;
  decreaseCount: (productId: number) => void;
  removeProductFromCart: (productId: number) => void;
}

export const CartItem: React.FunctionComponent<ICartItemProps> = ({
  index,
  productId,
  productName,
  productPrice,
  productsInCart,
  productsAvailable,
  increaseCount,
  decreaseCount,
  removeProductFromCart,
}) => {
  return (
    <>
      <SCIndex>{index + 1}</SCIndex>
      <SCProductName>{productName}</SCProductName>
      <SCCartCounter>
        <SCCartCounterButton
          disabled={productsInCart === 1}
          onClick={() => decreaseCount(productId)}
        >
          <RemoveIcon />
        </SCCartCounterButton>
        <SCCounterInput
          type="text"
          value={productsInCart}
          onChange={() => {}}
        />
        <SCCartCounterButton onClick={() => increaseCount(productId)}>
          <AddIcon />
        </SCCartCounterButton>
      </SCCartCounter>
      <SCProductPrice>{productPrice + " UAH"}</SCProductPrice>
      <HighlightOffIcon onClick={() => removeProductFromCart(productId)} />
    </>
  );
};
