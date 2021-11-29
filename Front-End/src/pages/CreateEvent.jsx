import "../fontawesome";
import Navbar from "../components/Navbar";
import CreateEventForm from "../components/CreateEventForm";
import CreateGiftModel from "../components/CreateGiftModel";
import CreateGiftList from "../components/CreateGiftList";
import Footer from "../components/Footer";
import "./CreateEvent.scss";
import { useState } from "react";

export default function CreateEventPage(props) {
  const [selectedEventInfo, setRenderEventInfo] = useState({
    event_id: "",
    event_name: "",
    date: null,
    address: "",
    description: "",
  });
  console.log("{{{{{{{{----renderEventInfo-----Mainpage", selectedEventInfo);

  return (
    <>
      <Navbar />
      <div className="event-page">
        <div className="event-info">
          <CreateEventForm
            selectedEventInfo={selectedEventInfo}
            setRenderEventInfo={setRenderEventInfo}
          />
          <CreateGiftModel
            selectedEventInfo={selectedEventInfo}
            setRenderEventInfo={setRenderEventInfo}
          />
          <CreateGiftList
            selectedEventInfo={selectedEventInfo}
            setRenderEventInfo={setRenderEventInfo}
          />
        </div>
      </div>

      <Footer />
    </>
  );
}
