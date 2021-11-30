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
        <TableCell align="center">URL</TableCell>
        <TableCell align="center">Price&nbsp;($)</TableCell>
        <TableCell align="center">QTY</TableCell>
        <TableCell align="center">Notes</TableCell>
        <TableCell align="center">Most Wanted</TableCell>
        <TableCell align="center">Edit</TableCell>
        <TableCell align="center">Delete</TableCell>
      </TableRow>
    </TableHead>
  );
} 
