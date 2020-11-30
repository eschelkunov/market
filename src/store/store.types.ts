import { IProduct } from "../components/interfaces";

export interface IStore {
  products: IProduct[];
}

export interface IAction {
  type: string;
  payload?: { id?: number };
}
