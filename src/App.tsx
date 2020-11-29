import React from "react";
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";
import { ProductList } from "./components/ProductList.tsx/ProductList";
import { IProduct } from "./components/interfaces";
import "./index.css";
import { Admin } from "./components/Admin/Admin";
import { Cart } from "./components/Cart/Cart";
import { ContactInfo } from "./components/ContactInfo/ContactInfo";
import { AboutUs } from "./components/AboutUs/AboutUs";
import { ABOUT, ADMIN, CART, CONTACT_US } from "./components/AppRoutes";

const products: IProduct[] = [
  {
    productId: 1,
    productName: "Some name 1",
    productPrice: 489,
    imageURL:
      "https://onlinejpgtools.com/images/examples-onlinejpgtools/coffee-resized.jpg",
  },
  {
    productId: 2,
    productName: "Some name 2",
    productPrice: 340,
    imageURL:
      "https://onlinejpgtools.com/images/examples-onlinejpgtools/coffee-resized.jpg",
  },
  {
    productId: 3,
    productName: "Some name 3",
    productPrice: 210,
    imageURL:
      "https://onlinejpgtools.com/images/examples-onlinejpgtools/coffee-resized.jpg",
  },
  {
    productId: 4,
    productName: "Some name 4",
    productPrice: 230,
    imageURL:
      "https://onlinejpgtools.com/images/examples-onlinejpgtools/coffee-resized.jpg",
  },
  {
    productId: 5,
    productName: "Some name 5",
    productPrice: 400,
    imageURL:
      "https://onlinejpgtools.com/images/examples-onlinejpgtools/coffee-resized.jpg",
  },
  {
    productId: 6,
    productName: "Some name 6",
    productPrice: 505,
    imageURL:
      "https://onlinejpgtools.com/images/examples-onlinejpgtools/coffee-resized.jpg",
  },
  {
    productId: 7,
    productName: "Some name 7",
    productPrice: 100,
    imageURL:
      "https://onlinejpgtools.com/images/examples-onlinejpgtools/coffee-resized.jpg",
  },
  {
    productId: 8,
    productName: "Some name 7",
    productPrice: 100,
    imageURL:
      "https://onlinejpgtools.com/images/examples-onlinejpgtools/coffee-resized.jpg",
  },
  {
    productId: 9,
    productName: "Some name 7",
    productPrice: 100,
    imageURL:
      "https://onlinejpgtools.com/images/examples-onlinejpgtools/coffee-resized.jpg",
  },
  {
    productId: 10,
    productName: "Some name 7",
    productPrice: 100,
    imageURL:
      "https://onlinejpgtools.com/images/examples-onlinejpgtools/coffee-resized.jpg",
  },
  {
    productId: 11,
    productName: "Some name 7",
    productPrice: 100,
    imageURL:
      "https://onlinejpgtools.com/images/examples-onlinejpgtools/coffee-resized.jpg",
  },
];

export const App: React.FunctionComponent<any> = () => {
  return (
    <div className="container">
      <Router>
        <Route
          exact
          path="/"
          render={() => {
            return <Redirect to="/goods" />;
          }}
        />
        <Route
          path="/goods"
          render={() => <ProductList products={products} />}
        />
        <Route path={CART} render={() => <Cart />} />
        <Route path={CONTACT_US} render={() => <ContactInfo />} />
        <Route path={ABOUT} render={() => <AboutUs />} />
        <Route path={ADMIN} render={() => <Admin />} />
      </Router>
    </div>
  );
};
