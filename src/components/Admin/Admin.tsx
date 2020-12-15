import React, { useRef, useState } from "react";
import { IProduct, IProductFormData } from "../../store/types/product.types";
import { Header } from "../AppBar/Header";
import { Footer } from "../Footer/Footer";
import { AddProductForm } from "./AddProductForm";
import {
  SCAdminWrapper,
  SCButton,
  SCButtonWrapper,
  SCFormHeader,
  SCInput,
} from "./Admin.style";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { ProductsTable } from "./ProductsTable";
import { useHistory } from "react-router-dom";
import { GOODS } from "../AppRoutes";
import { MUIAlert } from "../Alert/Alert";

interface IAdminProps {
  productsLack: IProduct[];
  products: IProduct[];
  addProduct: (product: IProductFormData) => Promise<any>;
  editProduct: (product: IProductFormData) => Promise<any>;
  deleteProduct: (id: number) => Promise<any>;
}

export const Admin: React.FunctionComponent<IAdminProps> = ({
  productsLack,
  products,
  addProduct,
  editProduct,
  deleteProduct,
}) => {
  const [selectedTab, setSelectedTab] = React.useState(0);
  const [showAlert, setShowAlert] = useState(false);
  const alertMessage = `Product was successfully removed!`;
  const handleAlertClose = () => {
    setShowAlert(false);
  };
  const history = useHistory();
  const inputRef = useRef<HTMLInputElement>(null);

  const onDeleteProduct = () => {
    const node = inputRef.current;
    deleteProduct(Number(node?.value)).then((resp) => {
      if (node) node.value = "";
      resp.status === 200 && setShowAlert(true);
    });
  };

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setSelectedTab(newValue);
  };
  return (
    <>
      <Header />
      <SCAdminWrapper>
        <Tabs
          value={selectedTab}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="Add product" />
          <Tab label="Edit product" />
          <Tab label="Delete product" />
        </Tabs>

        {selectedTab === 0 && (
          <>
            <SCFormHeader>Add your product below:</SCFormHeader>
            <AddProductForm addProduct={addProduct} formType="add" />
          </>
        )}

        {selectedTab === 1 && (
          <>
            {productsLack.length > 0 && (
              <>
                <SCFormHeader>Shortage of goods:</SCFormHeader>
                <ProductsTable products={productsLack} />
              </>
            )}
            <SCFormHeader>Edit product below:</SCFormHeader>
            <AddProductForm
              editProduct={editProduct}
              formType="edit"
              productsLack={productsLack}
            />
          </>
        )}

        {selectedTab === 2 && (
          <>
            <SCFormHeader>List of products:</SCFormHeader>
            <ProductsTable products={products} />
            <SCFormHeader>Delete product by ID:</SCFormHeader>
            <SCInput inputRef={inputRef} type="text" />
            <SCButtonWrapper>
              <SCButton
                type="button"
                variant="contained"
                color="primary"
                onClick={() => history.push(GOODS)}
              >
                <ArrowBackIosIcon fontSize="inherit" />
                Back to store
              </SCButton>
              <SCButton
                name="Delete product"
                type="submit"
                variant="contained"
                color="primary"
                disabled={!!inputRef.current?.value}
                onClick={onDeleteProduct}
              >
                Delete product
              </SCButton>
            </SCButtonWrapper>
            <MUIAlert
              showAlert={showAlert}
              handleAlertClose={handleAlertClose}
              message={alertMessage}
              severity={"success"}
            />
          </>
        )}
      </SCAdminWrapper>
      <Footer />
    </>
  );
};
