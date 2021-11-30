import { useState, useEffect } from "react";
// import { useParams } from "react-router";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import GiftListHeader from "../components/GiftListHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactDOM from "react-dom";
import CreateGiftModel from "./CreateGiftModel";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Modal } from "react-bootstrap";
import { Button } from "@mui/material";
import TableHead from "@mui/material/TableHead";
// import { getGifts } from "../services/gift";
// import { getEvent } from "../services/event";
const theme = createTheme({
  palette: {
    cancel: {
      main: "#808080",
    },
  },
});
export default function CreateGiftList(props) {
  const { gifts } = props;
  //   const { id } = useParams();

  const [reserved, setReserved] = useState(false);

  //   const [gifts, setGifts] = useState([]);
  //   const [eventInfo, setEventInfo] = useState({});
  //   const [giftsLength, setGiftsLength] = useState(gifts.length);

  //   const handelGiftsList = async (id) => {
  //     try {
  //       const response = await getGifts(id);
  //       setGifts(response.data.gifts);
  //       setGiftsLength(gifts.length);
  //     } catch (e) {
  //       console.log("error:", e);
  //     }
  //   };

  //   useEffect(() => {
  //     handelGiftsList(id);
  //   }, [id, giftsLength]);

  //   const handelEventInfo = async (id) => {
  //     try {
  //       const response = await getEvent(id);
  //       setEventInfo(response.data.gifts);
  //     } catch (e) {
  //       console.log("error:", e);
  //     }
  //   };

  //   useEffect(() => {
  //     handelEventInfo(id);
  //   }, [id]);

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
                  <TableCell align="right" onClick={() => {}}>
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
