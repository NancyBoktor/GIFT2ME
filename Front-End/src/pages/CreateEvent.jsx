import { useState } from "react";
import { Button } from "@mui/material";
import { createEvent } from "../services/event";
import Navbar from "../components/Navbar";
import CreateEventForm from "../components/CreateEventForm";
import CreateGiftModel from "../components/CreateGiftModel";
import DescriptionAlerts from "../components/Alert";
import "./CreateEvent.scss";

export default function CreateEventPage() {
  const [openGiftModel, setOpenGiftModel] = useState(false);
  const [eventId, setEventId] = useState(0);

  const onCancel = () => {
    setOpenGiftModel(false);
  };

  const [eventData, setEventData] = useState({
    event_name: "",
    date: "",
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

  return (
    <div>
      <Navbar />
      <div className="event-page">
        <div className="event-info">
          <CreateEventForm eventData={eventData} setEventData={setEventData} />
          <Button
            onClick={() => {
              setOpenGiftModel(true);
              handleCreateEvent();
            }}
          >
            <h5 className="create-event-button">Create Event</h5>
          </Button>
          {openGiftModel && !!eventId && (
            <CreateGiftModel onCancel={onCancel} event_id={eventId} />
          )}
          {openGiftModel && !!!eventId && (
            <DescriptionAlerts onClose={onCancel} />
          )}
        </div>
      </div>
    </div>
  );
}
