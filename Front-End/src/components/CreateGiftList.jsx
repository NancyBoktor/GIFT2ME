import { useState, useEffect } from "react";
import axios from "axios";
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
import { getGifts } from "../services/gift";
const theme = createTheme({
  palette: {
    cancel: {
      main: "#808080",
    },
  },
});
export default function CreateGiftList(props) {
  const { renderEventForm, openGiftModel, setOpenGiftModel } = props;

  const [show, setShow] = useState({});

  const handleShow = (giftId) => setShow({ ...show, [giftId]: true });
  const handleClose = (giftId) => setShow({ ...show, [giftId]: false });

  const [gifts, setGifts] = useState([]);

  const handelGiftsList = async (eventId) => {
    try {
      const response = await getGifts(eventId);
      setGifts(response.data.gifts);
    } catch (e) {
      console.log("error:", e);
    }
  };
  //   useEffect(() => {
  //     if (renderEventForm.event_id !== "") {
  //       handelGiftsList(renderEventForm.event_id);
  //     }
  //   }, [renderEventForm.event_id]);

  //   const handleDelete = (giftId) => {
  //     return axios
  //       .delete(`http://localhost:3001/api/gifts/delete/${giftId}`, {
  //         withCredentials: true,
  //       })
  //       .then((res) => {
  //         const newGifts = [...gifts];
  //         const index = gifts.findIndex((gift) => gift.id === giftId);
  //         gifts.splice(index, 1);
  //         setGifts(newGifts);
  //       });
  //   };
  return (
    <div>
      {gifts.length > 0 && (
        <TableContainer>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <GiftListHeader />
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
                    onClick={() => {
                      setOpenGiftModel(true);
                    }}
                  >
                    <FontAwesomeIcon icon={["fas", "edit"]} />
                  </TableCell>
                  {openGiftModel && <CreateGiftModel />}
                  <TableCell
                    align="right"
                    className="click trash"
                    onClick={() => handleShow(gift.id)}
                  >
                    <FontAwesomeIcon icon={["fas", "trash"]} />
                  </TableCell>
                  {ReactDOM.createPortal(
                    <Modal show={show[gift.id]}>
                      <Modal.Header
                        closeButton
                        onClick={() => handleClose(gift.id)}
                      >
                        <Modal.Title>Delete Gift</Modal.Title>
                      </Modal.Header>

                      <Modal.Body>
                        <p className="confirm-msg">
                          Are you sure you wish to delete this gift?
                        </p>
                        <p className="delete-warning">
                          This action cannot be undone
                        </p>
                      </Modal.Body>

                      <Modal.Footer>
                        <div>
                          <ThemeProvider theme={theme}>
                            <Button
                              onClick={() => handleClose(gift.id)}
                              variant="outlined"
                              color="cancel"
                            >
                              Cancel
                            </Button>
                          </ThemeProvider>
                        </div>
                        <Button
                         // onClick={() => handleDelete(gift.id)}
                          variant="outlined"
                          color="error"
                        >
                          Delete
                        </Button>
                      </Modal.Footer>
                    </Modal>,
                    document.body
                  )}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  );
}
