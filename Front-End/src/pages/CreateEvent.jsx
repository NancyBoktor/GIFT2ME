import { useState } from "react";
import { Button } from "@mui/material";
import { createEvent, getEvents } from "../services/event";
import Navbar from "../components/Navbar";
import CreateEventForm from "../components/CreateEventForm";
import CreateGiftModel from "../components/CreateGiftModel";

import "./CreateEvent.scss";

export default function CreateEventPage() {
  const [openGiftModel, setOpenGiftModel] = useState(false);
  const [eventId, setEventId] = useState(0);
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
    setOpenGiftModel(true);
    try {
      const { data } = await createEvent(eventData);
      setEventId(data.data.id);
    } catch (e) {
      console.log("error:", e);
    }
  };
  console.log("event Date", eventData);

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
            <CreateGiftModel onCancel={onCancel} event_id={eventId} />
          )}
        </div>
      </div>
    </div>
  );
}
