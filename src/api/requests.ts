import axios from "axios";
import { IProduct, IProductFormData } from "../store/types/product.types";
import { PRODUCTS } from "./routes";

const BASE_URL = "http://localhost:3000";

export const API = {
  getProducts: async () => {
    try {
      const response = await axios.get(`${BASE_URL}${PRODUCTS}`);
      return response;
    } catch (error) {
      console.log(error);
    }
  },

  addProduct: async (data: IProductFormData) => {
    try {
      const response = await axios.post(`${BASE_URL}${PRODUCTS}`, data);
      return response;
    } catch (error) {
      console.log(error);
    }
  },
  editProduct: async ({ id, ...rest }: IProduct | IProductFormData) => {
    try {
      const response = await axios.put(`${BASE_URL}${PRODUCTS}/${id}`, {
        ...rest,
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  },
  deleteProduct: async (id: number) => {
    try {
      const response = await axios.delete(`${BASE_URL}${PRODUCTS}/${id}`);
      return response;
    } catch (error) {
      console.log(error);
    }
  },
};
