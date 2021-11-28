import { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { createEvent } from "../services/event";
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

import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
// import axios from "axios";
import { getEvent } from "../services/event";

export default function CreateEventPage() {
  const navigate = useNavigate()
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
  const [event, setEvent] = useState();

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


  useEffect (() => {
    if(!id) {
      return;
    }
    handelGiftsList(id);
    (async () => {
    try {
      const { data } = await getEvent(id);
  console.log("data:", data)
  setEvent(data)
    } catch (e) {
      console.log("error:", e);
    }
  })()
  }, [id])


  const handleCreateEvent = async () => {
    try {
      const { data } = await createEvent(eventData);
      setEventData({
        event_name: "",
        date: null,
        address: "",
        description: "",
      })
      navigate(`/events/${data.data.id}`);
    } catch (e) {
      console.log("error:", e);
    }
  };
  // console.log("event Date", eventData);
  const handelGetGifts = async () => {
    try {
      const gifts = await getGifts(event.id);
      setGifts(gifts);
    } catch (e) {
      console.log("error:", e);
    }
  };

  // function createData(name, calories, fat, carbs, protein) {
  //   return { name, calories, fat, carbs, protein };
  // }

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
          <CreateEventForm eventData={eventData} event={event} setEventData={setEventData} />
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
              event_id={event.id}
              giftInfo={giftInfo}
              setGiftInfo={setGiftInfo}
              setGifts={setGifts}
            
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

//
