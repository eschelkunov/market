import { connect } from "react-redux";
import { IStore } from "../../store/store.types";
import { ProductList } from "../../components/ProductList/ProductList";

const mapStateToProps = (state: IStore) => ({
  products: state.products,
});

export const Goods = connect(mapStateToProps)(ProductList);
