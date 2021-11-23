import { useState } from "react";
import { Navigate } from "react-router";
import { createEvent } from "../services/event";
import "./event-form.scss";

export default function EventForm() {
  const [eventInfo, setEventInfo] = useState({
    event_name: "",
    date: "YY/MM/DD",
    address: "",
    description: "",
  });

  const [errorMsg, setErrorMsg] = useState("");
  const handelEventInfo = async (event) => {
    event.preventDefault();
    console.log("Event:", eventInfo);
    try {
      await createEvent(eventInfo);
      Navigate("/events");
    } catch (e) {
      console.log("error:", e);
    }
  };

  return (
    <div>
      <div className="event-info">
        <div className="event-card">
          <input type="file" id="imageFile" accept="image/*" multiple />
          <p>UPLOAD YOUR PHOTO</p>
        </div>
        <form onSubmit={handelEventInfo} className="event-form">
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
                setEventInfo({ ...eventInfo, description: event.target.value })
              }
              required
              autoComplete="off"
            />
          </label>
          <span className="error-msg">
            {() => {
              setErrorMsg(errorMsg);
            }}
          </span>
          <div>
            <button type="submit" className="login-btn">
              Confirm
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
