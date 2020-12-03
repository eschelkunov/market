import { createStore } from "redux";
import { productReducer } from "./reducers/productReducer";

export const store = createStore(
  productReducer,
  // for redux dev tool
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);
