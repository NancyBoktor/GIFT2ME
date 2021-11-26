import { useState } from "react";
import { Navigate } from "react-router";
import { createEvent, createItem } from "../services/event";
import CreateGiftForm from "./CreateGiftForm";
import useVisualMode from "../hooks/useVisualMode";
import CreateEventForm from "../components/CreateEvent";
import Navbar from "../components/Navbar";
import Footer from "./Footer";
import "./event-form.scss";

export default function EventForm() {
  const CREATEEVEVT = "CREATEEVEVT";
  const CREATEITEM = "CREATEITEM";
  const { mode, transition, back } = useVisualMode("CREATEEVEVT");

  const [eventInfo, setEventInfo] = useState({
    event_name: "",
    date: "YY/MM/DD",
    address: "",
    description: "",
  });

  const [itemInfo, setItemInfo] = useState({
    gift_name: "",
    price: 0,
    notes: "",
    store_url: ",",
    quantity: 0,
    most_wanted: "",
  });

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

  const handelItemInfo = async (event) => {
    event.preventDefault();

    try {
      await createItem(itemInfo);
      Navigate("/events");
    } catch (e) {
      console.log("error:", e);
    }
  };

  const handelCreateItem = async (event) => {
    transition(CREATEITEM);
  };

  const onCancel = () => {
    back();
  };

  return (
    <>
      <Navbar />
      {mode === CREATEEVEVT && (
        <CreateEventForm
          onClick={handelCreateItem}
          onConfirm={handelEventInfo}
          eventInfo={eventInfo}
          setEventInfo={setEventInfo}
        />
      )}
      {mode === CREATEITEM && (
        <CreateGiftForm
          onCancel={onCancel}
          onSave={handelItemInfo}
          itemInfo={itemInfo}
          setItemInfo={setItemInfo}
        />
      )}
       <Footer />
    </>
  );
}
