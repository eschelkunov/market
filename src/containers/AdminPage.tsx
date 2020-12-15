import { connect } from "react-redux";
import {
  addProduct,
  editProduct,
  deleteProduct,
} from "../store/actions/productActions";
import { Admin } from "../components/Admin/Admin";
import {
  getProducts,
  getProductsLack,
} from "../store/selectors/productSelectors";
import { IStore } from "../store/types/store.types";

const mapStateToProps = (state: IStore) => ({
  productsLack: getProductsLack(state),
  products: getProducts(state),
});

const mapDispatchToProps = {
  addProduct,
  editProduct,
  deleteProduct,
};

export const AdminPage = connect(mapStateToProps, mapDispatchToProps)(Admin);
