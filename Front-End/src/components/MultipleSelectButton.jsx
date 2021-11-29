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
  const { selectedEventInfo, setSelectedEventInfo } = props;
  const [eventsList, setEventsList] = useState([]);
  const { setEventId } = props;
  const [eventName, setEventName] = useState("");
  const handleChange = (event) => {
    const eventInfo = event.target.value;
    console.log("eventInfo-->value", eventInfo);
    setSelectedEventInfo({
      ...selectedEventInfo,
      event_id: eventInfo.id,
      event_name: eventInfo.event_name,
      date: eventInfo.date,
      description: eventInfo.description,
    });
    setEventName(eventInfo.event_name);
    setEventId((giftInfo) => {
      return {
        ...giftInfo,
        event_id: eventInfo.id,
      };
    });
  };

  const token = window.localStorage.getItem("token");
  const contents = JSON.parse(atob(token.split(".")[1]));
  const user_id = contents.id;
  useEffect(() => {
    getEvents(user_id).then((res) => {
      setEventsList(res.data);
    });
  }, []);

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
          {eventsList.map((event) => (
            <MenuItem key={event.id} value={event}>
              {event.event_name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
