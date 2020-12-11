import axios from "axios";
import { IProductFormData } from "../store/types/product.types";
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
};