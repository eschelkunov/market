import React from "react";
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";
import { Admin } from "./components/Admin/Admin";
import { ContactInfo } from "./components/ContactInfo/ContactInfo";
import { AboutUs } from "./components/AboutUs/AboutUs";
import { ABOUT, ADMIN, CART, CONTACT_US, GOODS } from "./components/AppRoutes";
import { GoodsPage } from "./components/containers/GoodsPage";
import { CartPage } from "./components/containers/CartPage";
import "./index.css";

export const App: React.FunctionComponent<any> = () => {
  return (
    <div className="container">
      <Router>
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
      </Router>
    </div>
  );
};
