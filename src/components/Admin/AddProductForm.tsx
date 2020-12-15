import React, { useState } from "react";
import { Form, Field } from "react-final-form";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { GOODS } from "../AppRoutes";
import { useHistory } from "react-router-dom";
import {
  SCInputLabel,
  SCInput,
  SCButton,
  SCWrapper,
  SCButtonWrapper,
  SCSpan,
  SCFlexWrapper,
} from "./Admin.style";
import {
  IFormData,
  IProduct,
  IProductFormData,
} from "../../store/types/product.types";
import { MUIAlert } from "../Alert/Alert";

interface IAddProductForm {
  formType: string;
  productsLack?: IProduct[];
  addProduct?: (product: IProductFormData) => Promise<any>;
  editProduct?: (product: IProductFormData) => Promise<any>;
}

export const AddProductForm: React.FunctionComponent<IAddProductForm> = ({
  formType,
  productsLack,
  addProduct,
  editProduct,
}) => {
  const [showAlert, setShowAlert] = useState(false);
  const alertMessage = `Product was successfully ${
    formType === "add" ? "added to stock " : "updated "
  }!`;
  const handleAlertClose = () => {
    setShowAlert(false);
  };
  const history = useHistory();

  const isURLValid = (value: any) => {
    const pattern = /^https?:\/\/.+/g;
    return value.match(pattern) ? undefined : "Incorrect URL";
  };

  const required = (value: any) => (value ? undefined : "Required");

  const mustBeNumber = (value: any) =>
    isNaN(value) ? "Must be a number" : undefined;

  const minValue = (min: any) => (value: any) =>
    isNaN(value) || value >= min
      ? undefined
      : `Should be greater than ${value}`;

  const composeValidators = (...validators: Function[]) => (value: any) =>
    validators.reduce(
      (error, validator) => error || validator(value),
      undefined
    );

  const onSubmit = async (obj: IFormData) => {
    const buildProductObj = (formType: string) => {
      const product: IProductFormData = {
        productName: obj.productName,
        productPrice: Number(obj.productPrice),
        imageURL: obj.imageURL,
        productsAvailable: Number(obj.productsAvailable),
        isProductInCart: false,
        productsInCart: 0,
        productsLack: 0,
      };
      if (formType === "edit") {
        /*some kind of logic here to calculate increasing/decreasing of 
        productsLack/productsAvailable props based on incoming data obj*/

        product.id = Number(obj.id);
        const productLackNumber =
          productsLack?.find((product) => product.id === Number(obj.id))
            ?.productsLack ?? 0;

        product.productsLack =
          productLackNumber + Number(obj.productsAvailable) < 0
            ? productLackNumber + Number(obj.productsAvailable)
            : 0;

        product.productsAvailable =
          productLackNumber + Number(obj.productsAvailable) < 0
            ? 0
            : productLackNumber + Number(obj.productsAvailable);
      }
      return product;
    };

    if (formType === "add") {
      addProduct &&
        (await addProduct(buildProductObj(formType)).then(
          (resp) => resp.status === 201 && setShowAlert(true)
        ));
    } else {
      editProduct &&
        (await editProduct(buildProductObj(formType)).then(
          (resp) => resp.status === 200 && setShowAlert(true)
        ));
    }
  };
  return (
    <>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit, valid, form }) => (
          <form
            onSubmit={(event) => handleSubmit(event)?.then(() => form.reset())}
          >
            <SCWrapper>
              {formType === "edit" && (
                <SCFlexWrapper>
                  <SCInputLabel>Product ID</SCInputLabel>
                  <Field
                    name="id"
                    component="input"
                    validate={composeValidators(required, mustBeNumber)}
                  >
                    {({ input, meta }: any) => (
                      <>
                        <SCInput type="text" {...input} component="input" />
                        {meta.error && meta.touched && (
                          <SCSpan>{meta.error}</SCSpan>
                        )}
                      </>
                    )}
                  </Field>
                </SCFlexWrapper>
              )}
              <SCFlexWrapper>
                <SCInputLabel>Product Name</SCInputLabel>
                <Field name="productName" component="input" validate={required}>
                  {({ input, meta }: any) => (
                    <>
                      <SCInput type="text" {...input} />
                      {meta.error && meta.touched && (
                        <SCSpan>{meta.error}</SCSpan>
                      )}
                    </>
                  )}
                </Field>
              </SCFlexWrapper>
              <SCFlexWrapper>
                <SCInputLabel>Product Price</SCInputLabel>
                <Field
                  name="productPrice"
                  component="input"
                  validate={composeValidators(required, mustBeNumber)}
                >
                  {({ input, meta }: any) => (
                    <>
                      <SCInput type="text" {...input} />
                      {meta.error && meta.touched && (
                        <SCSpan>{meta.error}</SCSpan>
                      )}
                    </>
                  )}
                </Field>
              </SCFlexWrapper>
              <SCFlexWrapper>
                <SCInputLabel>Product Image URL</SCInputLabel>
                <Field
                  name="imageURL"
                  component="input"
                  validate={composeValidators(required, isURLValid)}
                >
                  {({ input, meta }: any) => (
                    <>
                      <SCInput type="text" {...input} />
                      {meta.error && meta.touched && (
                        <SCSpan>{meta.error}</SCSpan>
                      )}
                    </>
                  )}
                </Field>
              </SCFlexWrapper>
              <SCFlexWrapper>
                <SCInputLabel>Products In Stock</SCInputLabel>
                <Field
                  name="productsAvailable"
                  component="input"
                  validate={composeValidators(
                    required,
                    mustBeNumber,
                    minValue(1)
                  )}
                >
                  {({ input, meta }: any) => (
                    <>
                      <SCInput type="text" {...input} />
                      {meta.error && meta.touched && (
                        <SCSpan>{meta.error}</SCSpan>
                      )}
                    </>
                  )}
                </Field>
              </SCFlexWrapper>

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
                  name="Add product"
                  type="submit"
                  variant="contained"
                  color="primary"
                  disabled={!valid}
                >
                  {formType === "add" ? "Add product" : "Edit product"}
                </SCButton>
              </SCButtonWrapper>
            </SCWrapper>
          </form>
        )}
      />
      <MUIAlert
        showAlert={showAlert}
        handleAlertClose={handleAlertClose}
        message={alertMessage}
        severity={"success"}
      />
    </>
  );
};
