import { useState } from "react";
import { TextField, Button } from "@mui/material";
import { createEvent } from "../services/event";
import { useNavigate } from "react-router-dom";
import "./CreateEvent.scss";

export default function CreateEventForm() {
  const navigate = useNavigate();
  const [eventInfo, setEventinfo] = useState({
    event_name: "",
    date: "YY/MM/DD",
    address: "",
    description: "",
  });

  const handleChange = (key, value) => {
    setEventinfo({ ...eventInfo, [key]: value });
  };

  const handleCreateEvent = async () => {
    console.log("Event:", eventInfo);
    try {
      const { data } = await createEvent(eventInfo);
      console.log("event-Data", data);
      if (data.success) {
        navigate(`/gifts?event_id=${data.data.id}`);
      }
    } catch (e) {
      console.log("error:", e);
    }
  };
  return (
    <div className="event-page">
      <div className="event-info">
        <TextField
          className="event-input"
          required
          label="Event Name"
          defaultValue={eventInfo.event_name}
          onChange={(e) => handleChange("event_name", e.target.value)}
        />

        <TextField
          className="event-input"
          required
          id="outlined-required"
          label="Date"
          defaultValue={eventInfo.date}
          onChange={(e) => handleChange("date", e.target.value)}
          type="date"
        />

        <TextField
          className="event-input"
          required
          id="outlined-required"
          label="Address"
          defaultValue={eventInfo.address}
          onChange={(e) => handleChange("address", e.target.value)}
        />

        <TextField
          className="event-input"
          required
          id="outlined-required"
          label="Description"
          rows={3}
          multiline
          defaultValue={eventInfo.description}
          onChange={(e) => handleChange("description", e.target.value)}
        />
        <Button variant="contained" onClick={handleCreateEvent}>
          Create Event
        </Button>
      </div>
    </div>
  );
}
