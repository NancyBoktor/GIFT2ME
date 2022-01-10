import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import GiftListHeader from "../components/GiftListHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactDOM from "react-dom";
import EditGiftModel from "./EditGiftModel";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Modal } from "react-bootstrap";
import { Button } from "@mui/material";
import "../components/CreateGiftList.scss";

import { getGiftInfo } from "../services/gift";
const theme = createTheme({
  palette: {
    cancel: {
      main: "#808080",
    },
  },
});
export default function CreateGiftList(props) {
  //const { event_id } = useParams();
  //console.log("-----eventId", event_id);
  const [giftInfo, setGiftInfo] = useState({});
  const [openGiftModel, setOpenGiftModel] = useState(false);
  const { gifts, selectedEventId, setSelectedEventId } = props;

  const [show, setShow] = useState({
    event_id: selectedEventId,
  });

  const handleShow = (giftId) => setShow({ ...show, [giftId]: true });
  const handleClose = (giftId) => setShow({ ...show, [giftId]: false });

  const handleDelete = (giftId) => {
    return axios.delete(`http://localhost:3001/api/gifts/${giftId}/delete`, {
      withCredentials: true,
    });
  };
  //--------------------------------->
  const handelgetGiftInfo = async (selectedEventId, gift_id) => {
    // event.preventDefault();
    const { data } = await getGiftInfo(selectedEventId, gift_id);
    setGiftInfo(data.data);
    setOpenGiftModel(true);
  };

  return (
    <div>
      {gifts.length > 0 && (
        <TableContainer>
          <Table sx={{ minWidth: "650px" }} aria-label="simple table">
            <GiftListHeader />
            <TableBody>
              {gifts.map((gift) => (
                <TableRow
                  key={gift.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>{gift.gift_name}</TableCell>
                  <TableCell
                    align="center"
                    className="truncate"
                    sx={{ maxWidth: 250 }}
                  >
                    <a href={gift.store_url} target="_blank" rel="noreferrer">
                      {gift.store_url}
                    </a>
                  </TableCell>
                  <TableCell align="center">{gift.price}</TableCell>
                  <TableCell align="center">{gift.quantity}</TableCell>
                  <TableCell align="center">{gift.notes}</TableCell>
                  <TableCell align="center">
                    {gift.most_wanted === true && (
                      <FontAwesomeIcon
                        className="heart"
                        icon={["fas", "heart"]}
                      />
                    )}
                  </TableCell>
                  <TableCell align="center">
                    <FontAwesomeIcon
                      icon={["fas", "edit"]}
                      onClick={() => {
                        handelgetGiftInfo(selectedEventId, gift.id);
                        setOpenGiftModel(true);
                      }}
                    />
                  </TableCell>

                  <TableCell
                    align="center"
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
                          onClick={() => handleDelete(gift.id)}
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
      {openGiftModel && (
        <EditGiftModel
          giftInfo={giftInfo}
          openGiftModel={openGiftModel}
          setOpenGiftModel={setOpenGiftModel}
          setSelectedEventId={setSelectedEventId}
          selectedEventId={selectedEventId}
        />
      )}
    </div>
  );
}
