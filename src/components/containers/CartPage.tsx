import { connect } from "react-redux";

import { IStore } from "../../store/types/store.types";
import { Cart } from "../Cart/Cart";

const mapStateToProps = (state: IStore) => ({
  productsInCart: state.productsInCart,
});

// const mapDispatchToProps = {
//
// };

export const CartPage = connect(mapStateToProps)(Cart);
