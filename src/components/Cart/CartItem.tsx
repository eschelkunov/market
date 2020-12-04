import React, { useState } from "react";
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
}

export const CartItem: React.FunctionComponent<ICartItemProps> = ({
  index,
  productName,
  productPrice,
  productId,
  removeProductFromCart,
}) => {
  const [itemCount, setItemCount] = useState(1);
  return (
    <>
      <SCIndex>{index + 1}</SCIndex>
      <SCProductName>{productName}</SCProductName>
      <SCCartCounter>
        <SCCartCounterButton
          disabled={itemCount === 1}
          onClick={() => setItemCount(itemCount - 1)}
        >
          <RemoveIcon />
        </SCCartCounterButton>
        <SCCounterInput type="text" value={itemCount} onChange={() => {}} />
        <SCCartCounterButton onClick={() => setItemCount(itemCount + 1)}>
          <AddIcon />
        </SCCartCounterButton>
      </SCCartCounter>
      <SCProductPrice>{productPrice + " UAH"}</SCProductPrice>
      <HighlightOffIcon onClick={() => removeProductFromCart(productId)} />
    </>
  );
};
