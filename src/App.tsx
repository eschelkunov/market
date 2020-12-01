import React from "react";
import { Redirect, Route } from "react-router-dom";
import { withRouter } from "react-router";
import { Admin } from "./components/Admin/Admin";
import { ContactInfo } from "./components/ContactInfo/ContactInfo";
import { AboutUs } from "./components/AboutUs/AboutUs";
import { ABOUT, ADMIN, CART, CONTACT_US, GOODS } from "./components/AppRoutes";
import { GoodsPage } from "./components/containers/GoodsPage";
import { CartPage } from "./components/containers/CartPage";
import "./index.css";
import { Header } from "./components/AppBar/Header";
import { Footer } from "./components/Footer/Footer";

const App: React.FunctionComponent<any> = () => {
  return (
    <div className="container">
      <Header />
      <div className="content">
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
        <Route path={ADMIN} render={() => <Admin />} />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default withRouter(App);
