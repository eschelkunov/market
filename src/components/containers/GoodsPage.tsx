import { connect } from "react-redux";
import { ProductList } from "../../components/ProductList/ProductList";
import { addProductToCart } from "../../store/actions/productActions";
import { IStore } from "../../store/types/store.types";

const mapStateToProps = (state: IStore) => ({
  products: state.products,
});

const mapDispatchToProps = {
  addProductToCart,
};

export const GoodsPage = connect(mapStateToProps, mapDispatchToProps)(ProductList);
