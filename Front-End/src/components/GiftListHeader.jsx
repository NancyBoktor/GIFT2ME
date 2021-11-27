import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function GiftListHeader() {
  return (
    <TableHead>
      <TableRow>
        <TableCell>Gift Name</TableCell>
        <TableCell align="right">URL</TableCell>
        <TableCell align="right">Price&nbsp;($)</TableCell>
        <TableCell align="right">Quantity</TableCell>
        <TableCell align="right">Notes</TableCell>
      </TableRow>
    </TableHead>
  );
}
