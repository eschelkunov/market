import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import { IProduct } from "../../store/types/product.types";
import { SCTableCell } from "./Admin.style";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(
  id: number,
  productName: string,
  productPrice: number,
  imageURL: string,
  productsAvailable: number,
  productsLack: number
) {
  return {
    id,
    productName,
    productPrice,
    imageURL,
    productsAvailable,
    productsLack,
  };
}

interface IProductLackTable {
  products: IProduct[];
}

export const ProductsTable: React.FunctionComponent<IProductLackTable> = ({
  products,
}) => {
  const classes = useStyles();
  const rows: any[] = [];

  const createRows = (products: any[]) => {
    products.forEach(
      ({
        id,
        productName,
        productPrice,
        imageURL,
        productsAvailable,
        productsLack,
      }) =>
        rows.push(
          createData(
            id,
            productName,
            productPrice,
            imageURL,
            productsAvailable,
            productsLack
          )
        )
    );
  };
  createRows(products);

  return (
    <Table className={classes.table}>
      <TableHead>
        <TableRow>
          <TableCell>ID</TableCell>
          <TableCell align="right">Name</TableCell>
          <TableCell align="right">Price</TableCell>
          <TableCell align="right">Image URL</TableCell>
          <TableCell align="right">In Stock</TableCell>
          <TableCell align="right">Lack</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow key={row.id}>
            <SCTableCell component="th" scope="row">
              {row.id}
            </SCTableCell>
            <SCTableCell align="right">{row.productName}</SCTableCell>
            <SCTableCell align="right">{row.productPrice}</SCTableCell>
            <SCTableCell align="right">{row.imageURL}</SCTableCell>
            <SCTableCell align="right">{row.productsAvailable}</SCTableCell>
            <SCTableCell align="right">{row.productsLack}</SCTableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
