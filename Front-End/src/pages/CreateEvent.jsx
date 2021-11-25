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
  const [openAlert, setOpenAlert] = useState(false);

  const onCancel = () => {
    setOpenGiftModel(false);
  };
  const [eventData, setEventData] = useState({
    event_name: "",
    date: "",
    address: "",
    description: "",
  });
  console.log("\\\\\\\\", eventData);
  console.log();
  const handleCreateEvent = async () => {
    try {
      const { data } = await createEvent(eventData);
      console.log("--->---->--->afteraxios", data);
      setEventData({
        ...eventData,
        event_name: data.data.event_name,
        date: data.data.date,
        address: data.data.address,
        description: data.data.description,
        event_id: data.data.id,
      });
      console.log("--->---->--->afterstate", eventData);
      console.log("--->---->--->afterstate_event_id", eventData.event_id);
      console.log("--->---->--->afterstate_event_id", eventData.event_name);
      // should render the gift table
      return data;
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
              handleCreateEvent(eventData);
            }}
          >
            <h5 className="create-event-button">Create Event</h5>
          </Button>
          {eventData.event_id && openGiftModel && (
            <CreateGiftModel onCancel={onCancel} event_id={eventData.id} />
          )}
          {!eventData.event_id && openGiftModel && (
            <DescriptionAlerts onClose={() => setOpenAlert(false)} />
          )}
        </div>
      </div>
    </div>
  );
}
