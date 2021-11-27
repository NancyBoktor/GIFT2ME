import * as React from "react";
import { useEffect, useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { getEvents } from "../services/event";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export default function MultipleSelectButton(props) {
  const [eventName, setEventName] = useState("");
  const [events, setEvents] = useState([]);

  const setGiftInfo = props.setGiftInfo;

  const handleChange = (event) => {
    setEventName(event.target.value);
    setGiftInfo((giftInfo) => {
      return { ...giftInfo, event_id: event.target.value };
    });
  };

  const token = window.localStorage.getItem("token");
  const contents = JSON.parse(atob(token.split(".")[1]));
  const user_id = contents.id;
  console.log("------>userid from token", user_id);
  useEffect(() => {
    getEvents(user_id).then((res) => {
      setEvents(res.data);
    });
  }, []);
  console.log("eventName", eventName);
  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-name-label">Event-Name</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          value={eventName}
          label="Event Name"
          onChange={handleChange}
        >
          {events.map((event) => (
            <MenuItem key={event.id} value={event.id}>
              {event.event_name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
