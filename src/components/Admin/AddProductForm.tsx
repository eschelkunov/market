import React, { useState } from "react";
import { Form, Field } from "react-final-form";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { ADMIN, GOODS } from "../AppRoutes";
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
import { IFormProduct, IProduct } from "../../store/types/product.types";
import { MUIAlert } from "../Alert/Alert";

interface IAddProductForm {
  addProduct: (product: IProduct) => void;
}

export const AddProductForm: React.FunctionComponent<IAddProductForm> = ({
  addProduct,
}) => {
  const [showAlert, setShowAlert] = useState(false);
  const alertMessage = "Product was successfully added to stock!";
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

  const onSubmit = (obj: IFormProduct) => {
    const product: IProduct = {
      productId: Number(obj.productId),
      productName: obj.productName,
      productPrice: Number(obj.productPrice),
      imageURL: obj.imageURL,
      productsAvailable: Number(obj.productsAvailable),
      isProductInCart: false,
      productsInCart: 0,
    };
    addProduct(product);
    setShowAlert(true);
    //TODO: delete me when use async (form reset is not working with sync form)
    setTimeout(() => {
      history.push(ADMIN);
    }, 4000);
  };
  return (
    <>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit, valid }) => (
          <form onSubmit={handleSubmit}>
            <SCWrapper>
              <SCFlexWrapper>
                <SCInputLabel>Product ID</SCInputLabel>
                <Field
                  name="productId"
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
                <SCInputLabel>Product Units</SCInputLabel>
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
                  Back
                </SCButton>
                <SCButton
                  name="Add product"
                  type="submit"
                  variant="contained"
                  color="primary"
                  disabled={!valid}
                >
                  Add product
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
