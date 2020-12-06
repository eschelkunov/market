import { connect } from "react-redux";
import { IStore } from "../store/types/store.types";
import {
  removeProductFromCart,
  increaseCount,
  decreaseCount,
} from "../store/actions/productActions";
import { Cart } from "../components/Cart/Cart";
import { getProductsInCart } from "../store/selectors/productSelectors";

const mapStateToProps = (state: IStore) => ({
  productsInCart: getProductsInCart(state),
});

const mapDispatchToProps = {
  removeProductFromCart,
  increaseCount,
  decreaseCount,
};

export const CartPage = connect(mapStateToProps, mapDispatchToProps)(Cart);
