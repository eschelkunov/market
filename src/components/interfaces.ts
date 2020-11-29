export interface IProduct {
    productId: number;
    productName: string;
    productPrice: number;
    imageURL: string;
  }
  
  export interface IProductList {
    products: IProduct[];
  }