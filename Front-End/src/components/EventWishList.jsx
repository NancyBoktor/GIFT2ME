import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
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
  const { gifts, setGifts, event_id } = props;
  const navigate = useNavigate();
 

  const handleOnClick = async (gift_id) => {
    try {
      const { data } = await updateGift(event_id, gift_id);
      if (data.success) {
        // const newGifts = gifts.map((g) => {
        //   if (g.id === gift_id) {
        //     return { ...g, quantity: g.quantity - 1 };
        //   }
        //   return g;
        // });
        setGifts(data.data);
      }
      navigate(`/invitation/${event_id}`, { replace: true });
    } catch (e) {
      console.log("error:", e);
    }
  };

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
                <TableCell align="right">Gifters</TableCell>
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
                  <TableCell align="center" className="truncate" sx={{ maxWidth: 250 }} >
                    <a href={gift.store_url} target="_blank" > {gift.store_url} </a>
                  </TableCell>
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
                  >
                    <Button 
                      disabled={gift.quantity < 1} 
                      onClick={() => {
                      handleOnClick(gift.id);
                    }}>
                      {gift.quantity < 1 ? "Reserved" : "Reserve"}
                    </Button>
                  </TableCell>
                  <TableCell align="right">Maram</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
      
    </div>
  );
}
