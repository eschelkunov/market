import { IProduct } from "./product.types";

export interface IStore {
  products: IProduct[];
  productsInCart: IProduct[];
}
