import { connect } from "react-redux";
import { IStore } from "../store/types/store.types";
import {
  removeProductFromCart,
  increaseCount,
  decreaseCount,
  buyProducts,
} from "../store/actions/productActions";
import { Cart } from "../components/Cart/Cart";
import { getProductsInCart, getProductsInCartIDs } from "../store/selectors/productSelectors";

const mapStateToProps = (state: IStore) => ({
  cartProducts: getProductsInCart(state),
  cartProductsIDs: getProductsInCartIDs(state),
});

const mapDispatchToProps = {
  removeProductFromCart,
  increaseCount,
  decreaseCount,
  buyProducts,
};

export const CartPage = connect(mapStateToProps, mapDispatchToProps)(Cart);
