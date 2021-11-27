import { useState } from "react";
import { Button } from "@mui/material";
import { createEvent } from "../services/event";
import Navbar from "../components/Navbar";
import CreateEventForm from "../components/CreateEventForm";
import CreateGiftModel from "../components/CreateGiftModel";
import GiftListItem from "../components/GiftListItem";
import { getGifts } from "../services/gift";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import "./CreateEvent.scss";

export default function CreateEventPage() {
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

  const handleCreateEvent = async () => {
    try {
      const { data } = await createEvent(eventData);
      setEventId(data.data.id);
    } catch (e) {
      console.log("error:", e);
    }
  };
  // console.log("event Date", eventData);
  const handelGetGifts = async () => {
    try {
      const gifts = await getGifts(eventId);
      setGifts(gifts);
    } catch (e) {
      console.log("error:", e);
    }
  };

  // function createData(name, calories, fat, carbs, protein) {
  //   return { name, calories, fat, carbs, protein };
  // }

  return (
    <div>
      <Navbar />
      <div className="event-page">
        <div className="event-info">
          <CreateEventForm eventData={eventData} setEventData={setEventData} />
          <Button
            variant="contained"
            href="#contained-buttons"
            onClick={() => {
              handleCreateEvent();
            }}
          >
            <h5 className="create-event-button">Create Event</h5>
          </Button>
          <Button
            variant="contained"
            href="#contained-buttons"
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
              handelGetGifts={handelGetGifts}
            />
          )}
        </div>
      </div>
      <GiftListItem />
      {/* {eventId &&
        Array.isArray(gifts).map((gift) => (
          <TableRow
            key={gift.id}
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            <TableCell align="right">{gift.gift_name}</TableCell>
            <TableCell component="th" scope="row">
              {gift.stor_url}
            </TableCell>
            <TableCell align="right">{gift.notes}</TableCell>
            <TableCell align="right">{gift.price}</TableCell>
            <TableCell align="right">{gift.quantity}</TableCell>
          </TableRow>
        ))} */}
    </div>
  );
}

//
