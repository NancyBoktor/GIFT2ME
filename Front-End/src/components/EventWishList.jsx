import { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { createTheme } from "@mui/material/styles";

import { Button } from "@mui/material";
import TableHead from "@mui/material/TableHead";
import { updateGift } from "../services/gift";
const theme = createTheme({
  palette: {
    cancel: {
      main: "#808080",
    },
  },
});

export default function CreateGiftList(props) {
  const { gifts, id } = props;
  //const navigate = useNavigate();
  const [reserved, setReserved] = useState(false);
  //const [giftQuantity, setGiftQuantity] = useState();
  //const [Disabled, setDisabled] = useState(false);

  // const handleOnClick = async () => {
  //   if (giftQuantity === 0) {
  //     setDisabled(true);
  //     setReserved(true);
  //     return;
  //   }
  //   await updateGift(id);
  //   navigate(`/invitation/${id}`);
  // };

  return (
    <div>
      {gifts.length > 0 && (
        <TableContainer>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Gift Name</TableCell>
                <TableCell align="right">URL</TableCell>
                <TableCell align="right">Price&nbsp;($)</TableCell>
                <TableCell align="right">Quantity</TableCell>
                <TableCell align="right">Notes</TableCell>
                <TableCell align="right">Most Wanted</TableCell>
                <TableCell align="right">Reservation</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {gifts.map((gift) => (
                <TableRow
                  key={gift.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {gift.gift_name}
                  </TableCell>
                  <TableCell align="right">{gift.store_url}</TableCell>
                  <TableCell align="right">{gift.price}</TableCell>
                  <TableCell align="right">{gift.quantity}</TableCell>
                  <TableCell align="right">{gift.notes}</TableCell>
                  <TableCell align="right">
                    {gift.most_wanted === true && (
                      <FontAwesomeIcon icon={["fas", "heart"]} />
                    )}
                  </TableCell>
                  <TableCell
                    align="right"
                    // onClick={handleOnClick}
                  >
                    <Button>{reserved ? "Reserved" : "Reserve"}</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  );
}
