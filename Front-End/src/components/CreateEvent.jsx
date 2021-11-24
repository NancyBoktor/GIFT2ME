import { useState } from "react";
import { TextField, Button } from "@mui/material";
import { createEvent } from "../services/event";
import { useNavigate } from "react-router-dom";

export default function CreateEventForm(props) {
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
        {/* <div className="event-card">
          <input type="file" id="imageFile" accept="image/*" multiple />
          <p>UPLOAD YOUR PHOTO</p>
        </div>
        <form className="event-form">
          <label className="text-area">
            <input
              type="text"
              placeholder="MY WISH LIST"
              defaultValue={eventInfo.event_name}
              onChange={(event) =>
                setEventInfo({ ...eventInfo, event_name: event.target.value })
              }
              required
              autoComplete="off"
            />
          </label>
          <label className="text-area">
            <input
              type="date"
              defaultValue={eventInfo.date}
              onChange={(event) =>
                setEventInfo({ ...eventInfo, date: event.target.value })
              }
              required
              autoComplete="off"
            />
          </label>
          <label className="text-area">
            <input
              type="text"
              placeholder="Event-Address"
              defaultValue={eventInfo.address}
              onChange={(event) =>
                setEventInfo({ ...eventInfo, address: event.target.value })
              }
              required
              autoComplete="off"
            />
          </label>
          <label className="text-area">
            <input
              type="text"
              placeholder="My Event Description"
              defaultValue={eventInfo.description}
              onChange={(event) =>
                setEventInfo({
                  ...eventInfo,
                  description: event.target.value,
                })
              }
              required
              autoComplete="off"
            />
          </label>
          <div>
            <button
              type="submit"
              className="login-btn"
              onClick={props.onConfirm}
            >
              Confirm
            </button>
          </div>
        </form>
        <Fab
          color="primary"
          aria-label="add"
          className="add-item-icon"
          onClick={props.onClick}
        >
          Hi
        </Fab>
        <span className="error-msg">
          {() => {
            setErrorMsg(errorMsg);
          }}
        </span>
      </div> */}
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
