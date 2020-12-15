import React, { useEffect } from "react";
import { Redirect, Route } from "react-router-dom";
import { withRouter } from "react-router";
import { ContactInfo } from "./components/ContactInfo/ContactInfo";
import { AboutUs } from "./components/AboutUs/AboutUs";
import { ABOUT, ADMIN, CART, CONTACT_US, GOODS } from "./components/AppRoutes";
import { GoodsPage } from "./containers/GoodsPage";
import { CartPage } from "./containers/CartPage";
import "./index.css";
import { AdminPage } from "./containers/AdminPage";
import { connect } from "react-redux";
import { fetchProducts } from "./store/actions/productActions";

interface IApp {
  fetchProducts: () => void;
}

const App: React.FunctionComponent<IApp> = ({ fetchProducts }) => {
  useEffect(() => {
    fetchProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container">
      <Route
        exact
        path="/"
        render={() => {
          return <Redirect to={GOODS} />;
        }}
      />
      <Route path={GOODS} render={() => <GoodsPage />} />
      <Route path={CART} render={() => <CartPage />} />
      <Route path={CONTACT_US} render={() => <ContactInfo />} />
      <Route path={ABOUT} render={() => <AboutUs />} />
      <Route path={ADMIN} render={() => <AdminPage />} />
    </div>
  );
};

const mapDispatchToProps = {
  fetchProducts,
};

export default withRouter(connect(null, mapDispatchToProps)(App));
