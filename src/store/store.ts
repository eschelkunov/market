import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { productReducer } from "./reducers/productReducer";
import { composeWithDevTools } from "redux-devtools-extension";

export const store = createStore(
  productReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
