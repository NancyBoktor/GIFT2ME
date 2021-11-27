import { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { createEvent, getEvents } from "../services/event";
import Navbar from "../components/Navbar";
import CreateEventForm from "../components/CreateEventForm";
import CreateGiftModel from "../components/CreateGiftModel";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import GiftListHeader from "../components/GiftListHeader";
import Paper from "@mui/material/Paper";
import Footer from "../components/Footer";
import { getGifts } from "../services/gift";
import "./CreateEvent.scss";

export default function CreateEventPage() {
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

  const [eventId, setEventId] = useState(0);

  const [gifts, setGifts] = useState([]);

  const onCancel = () => {
    setOpenGiftModel(false);
  };

  const [eventData, setEventData] = useState({
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

  const handleCreateEvent = async () => {
    try {
      const { data } = await createEvent(eventData);
      setEventId(data.data.id);
    } catch (e) {
      console.log("error:", e);
    }
  };
  console.log("event Date", eventData);

  const handelGiftsList = async (eventId) => {
    // console.log("........eventId", eventId);
    try {
      const response = await getGifts(eventId);
      //console.log("gifts--->--->", gifts);
      setGifts(response.data.gifts);
    } catch (e) {
      console.log("error:", e);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="event-page">
        <div className="event-info">
          <CreateEventForm eventData={eventData} setEventData={setEventData} />
          <Button
            onClick={() => {
              handleCreateEvent();
            }}
          >
            <h5 className="create-event-button">Create Event</h5>
          </Button>
          <Button
            onClick={() => {
              setOpenGiftModel(true);
            }}
          >
            <h5 className="create-event-button">Add Gifts</h5>
          </Button>
          {openGiftModel && (
            <CreateGiftModel
              onCancel={onCancel}
              event_id={eventId}
              giftInfo={giftInfo}
              setGiftInfo={setGiftInfo}
            />
          )}
        </div>
      </div>
      {gifts.length > 0 && (
        <TableContainer component={Paper}>
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
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  );
}
