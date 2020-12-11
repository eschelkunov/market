import React from "react";
import { IProductFormData } from "../../store/types/product.types";
import { Header } from "../AppBar/Header";
import { Footer } from "../Footer/Footer";
import { AddProductForm } from "./AddProductForm";
import { SCAdminWrapper, SCFormHeader } from "./Admin.style";

interface IAdminProps {
  addProduct: (product: IProductFormData) => void;
}

export const Admin: React.FunctionComponent<IAdminProps> = ({ addProduct }) => {
  return (
    <>
      <Header />
      <SCAdminWrapper>
        <SCFormHeader>Add your product below:</SCFormHeader>
        <AddProductForm addProduct={addProduct} />
      </SCAdminWrapper>
      <Footer />
    </>
  );
};
