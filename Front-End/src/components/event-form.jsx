import { useState } from "react";
import { Navigate } from "react-router";
import Button from "./button";
import { confirm } from "../services/event-POST";
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
    try {
      const info = await confirm(eventInfo);
      console.log("info", info);
      Navigate("/events");
    } catch (e) {
      console.log("error:", e);
    }
  };

  return (
    <div>
      <div className="event-info">
        <div className="event-card">
          <label for="imageFile">Select an image:</label>
          <input type="file" id="imageFile" accept="image/*" multiple />
        </div>
        <form onSubmit={handelEventInfo}>
          <label>
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
          <label>
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
          <label>
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
          <label>
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
          <span className="error-msg">{errorMsg}</span>
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
