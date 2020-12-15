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
  id: number;
  index: number;
  productName: string;
  productPrice: number;
  productsInCart: number;
  productsAvailable: number;
  increaseProductCount: (id: number) => void;
  decreaseProductCount: (id: number) => void;
  removeProductFromCart: (id: number) => void;
}

export const CartItem: React.FunctionComponent<ICartItemProps> = ({
  id,
  index,
  productName,
  productPrice,
  productsInCart,
  productsAvailable,
  increaseProductCount,
  decreaseProductCount,
  removeProductFromCart,
}) => {
  return (
    <>
      <SCIndex>{index + 1}</SCIndex>
      <SCProductName>{productName}</SCProductName>
      <SCCartCounter>
        <SCCartCounterButton
          disabled={productsInCart === 1}
          onClick={() => decreaseProductCount(id)}
        >
          <RemoveIcon />
        </SCCartCounterButton>
        <SCCounterInput
          type="text"
          value={productsInCart}
          onChange={() => {}}
        />
        <SCCartCounterButton onClick={() => increaseProductCount(id)}>
          <AddIcon />
        </SCCartCounterButton>
      </SCCartCounter>
      <SCProductPrice>{productPrice + " UAH"}</SCProductPrice>
      <HighlightOffIcon onClick={() => removeProductFromCart(id)} />
    </>
  );
};
