import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
} from "@mui/material";
import React from "react";

const createData = (
  id: number,
  name: string,
  date: string,
  shipTo: string,
  paymentMethod: string,
  saleAmount: number
) => {
  return { id, date, name, shipTo, paymentMethod, saleAmount };
};

const rows = [
  createData(0, "1 jan 2024", "Banti", "Pune", "Gpay",83756386),
  createData(1, "1 jan 2024", "Banti", "Pune", "Gpay",83756386),
  createData(2, "1 jan 2024", "Banti", "Pune", "Gpay",83756386),
  createData(3, "1 jan 2024", "Banti", "Pune", "Gpay",83756386),
  createData(4, "1 jan 2024", "Banti", "Pune", "Gpay",83756386),
  createData(5, "1 jan 2024", "Banti", "Pune", "Gpay",83756386),
];
const Orders = () => {
  return (
    <React.Fragment>
        <Typography variant="h5" component="p" color="primary">Recent Orders</Typography>
      <TableContainer >
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Ship To</TableCell>
              <TableCell align="right">Payment Method</TableCell>
              <TableCell align="right">Sale Amount</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.date}
                </TableCell>
                <TableCell align="right">{row.name}</TableCell>
                <TableCell align="right">{row.shipTo}</TableCell>
                <TableCell align="right">{row.paymentMethod}</TableCell>
                <TableCell align="right">{`$${row.saleAmount}`}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </React.Fragment>
  );
};

export default Orders;
