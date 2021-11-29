import { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { editEvent } from "../services/event";
import Navbar from "../components/Navbar";
import CreateEventForm from "../components/CreateEventForm";
import CreateGiftModel from "../components/CreateGiftModel";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import GiftListHeader from "../components/GiftListHeader";
// import Paper from "@mui/material/Paper";
import Footer from "../components/Footer";
import { getGifts } from "../services/gift";
import "./CreateEvent.scss";

import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
// import axios from "axios";
import { getEvent } from "../services/event";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../fontawesome";

import axios from "axios";
import { Modal } from "react-bootstrap";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ReactDOM from "react-dom";

const theme = createTheme({
  palette: {
    cancel: {
      main: "#808080",
    },
  },
});

export default function CreateEventPage() {
  const navigate = useNavigate();
  const [giftInfo, setGiftInfo] = useState({
    event_id: "",
    gift_name: "",
    price: 0,
    notes: "",
    store_url: "",
    quantity: 0,
    most_wanted: false,
  });
  console.log("giftInfo---->--->", giftInfo);

  const [openGiftModel, setOpenGiftModel] = useState(false);

  const [gifts, setGifts] = useState([]);
  const { id } = useParams();
  const [event, setEvent] = useState({});
  const [show, setShow] = useState({});

  const onCancel = () => {
    setOpenGiftModel(false);
  };

  const [eventData, setEventData] = useState({
    event_id: id,
    event_name: "",
    date: null,
    address: "",
    description: "",
  });

  useEffect(() => {
    if (giftInfo.event_id !== "") {
      handelGiftsList(giftInfo.event_id);
    }
  }, [giftInfo.event_id]);

  useEffect(() => {
    if (!id) {
      return;
    }
    handelGiftsList(id);
    (async () => {
      try {
        const { data } = await getEvent(id);
        console.log("data999:", data);
        setEvent(data);
      } catch (e) {
        console.log("error:", e);
      }
    })();
  }, [id]);

  useEffect(() => {
    const eventData = {
      event_id: event.id,
      event_name: event.event_name,
      date: event.date,
      address: event.address,
      description: event.description,
    };
    setEventData(eventData);
  }, [event]);

  const handleEditEvent = async () => {
    try {
      const data = await editEvent(eventData);
      console.log("{edit-data-res}", data.data.data.id);
      navigate(`/events/${data.data.data.id}`);
    } catch (e) {
      console.log("error:", e);
    }
  };

  const handelGetGifts = async () => {
    try {
      const gifts = await getGifts(event.id);
      setGifts(gifts);
    } catch (e) {
      console.log("error:", e);
    }
  };

  const handelGiftsList = async (eventId) => {
    try {
      const response = await getGifts(eventId);

      setGifts(response.data.gifts);
    } catch (e) {
      console.log("error:", e);
    }
  };

  const handleDelete = (giftId) => {
    console.log("giftId:", giftId);
    return axios
      .delete(`http://localhost:3001/api/gifts/delete/${giftId}`, {
        withCredentials: true,
      })
      .then((res) => {
        console.log("res:", res);
        const newGifts = [...gifts];
        const index = gifts.findIndex((gift) => gift.id === giftId);
        gifts.splice(index, 1);
        setGifts(newGifts);
      });
  };

  const handleShow = (giftId) => setShow({ ...show, [giftId]: true });
  const handleClose = (giftId) => setShow({ ...show, [giftId]: false });

  return (
    <>
      <Navbar />
      <div className="event-page">
        <div className="event-info">
          <CreateEventForm
            eventData={eventData}
            event={event}
            setEventData={setEventData}
          />
          <Button
            variant="contained"
            onClick={() => {
              handleEditEvent();
            }}
          >
            <h5 className="create-event-button">Edit</h5>
          </Button>
          <Button
            variant="contained"
            onClick={() => {
              setOpenGiftModel(true);
            }}
          >
            <h5 className="create-event-button">Add Gifts</h5>
          </Button>
          {openGiftModel && (
            <CreateGiftModel
              onCancel={onCancel}
              event_id={event.id}
              giftInfo={giftInfo}
              setGiftInfo={setGiftInfo}
              setGifts={setGifts}
            />
          )}
        </div>
      </div>
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
                    )}{" "}
                  </TableCell>
                  <TableCell
                    align="right"
                    onClick={() => {
                      setOpenGiftModel(true);
                    }}
                  >
                    <FontAwesomeIcon icon={["fas", "edit"]} />
                  </TableCell>
                  {openGiftModel && (
                    <CreateGiftModel
                      onCancel={onCancel}
                      event_id={event.id}
                      giftInfo={giftInfo}
                      setGiftInfo={setGiftInfo}
                      setGifts={setGifts}
                    />
                  )}
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
      <Footer />
    </>
  );
}
