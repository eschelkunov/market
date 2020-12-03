import { connect } from "react-redux";

import { IStore } from "../../store/types/store.types";
import { Cart } from "../Cart/Cart";
import { removeProductFromCart } from "../../store/actions/productActions";

const mapStateToProps = (state: IStore) => ({
  productsInCart: state.productsInCart,
});

const mapDispatchToProps = {
  removeProductFromCart,
};

export const CartPage = connect(mapStateToProps, mapDispatchToProps)(Cart);
