import { connect } from "react-redux";
import { ProductList } from "../components/ProductList/ProductList";
import { increaseProductCount } from "../store/actions/productActions";
import { getProducts } from "../store/selectors/productSelectors";
import { IStore } from "../store/types/store.types";

const mapStateToProps = (state: IStore) => ({
  products: getProducts(state),
});

const mapDispatchToProps = {
  increaseProductCount,
};

export const GoodsPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductList);
