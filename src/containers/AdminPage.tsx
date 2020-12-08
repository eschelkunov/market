import { connect } from "react-redux";
import { addProduct } from "../store/actions/productActions";
import { Admin } from "../components/Admin/Admin";

const mapDispatchToProps = {
  addProduct,
};

export const AdminPage = connect(null, mapDispatchToProps)(Admin);
