import { connect } from "react-redux";
import { ProductList } from "../components/ProductList/ProductList";
import {
  addProductToCart,
  increaseCount,
} from "../store/actions/productActions";
import {
  getProducts,
  getProductsInCart,
} from "../store/selectors/productSelectors";
import { IStore } from "../store/types/store.types";

const mapStateToProps = (state: IStore) => ({
  products: getProducts(state),
  productsInCart: getProductsInCart(state),
});

const mapDispatchToProps = {
  addProductToCart,
  increaseCount,
};

export const GoodsPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductList);
