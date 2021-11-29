import { useState } from "react";
import Navbar from "../components/Navbar";
import CreateEventForm from "../components/CreateEventForm";
import CreateGiftModel from "../components/CreateGiftModel";
import CreateGiftList from "../components/CreateGiftList";
import Footer from "../components/Footer";
import "../fontawesome";
import "./CreateEvent.scss";

export default function CreateEventPage(props) {
  const [selectedEventId, setSelectedEventId] = useState(0);
  console.log("select", selectedEventId);

  return (
    <>
      <Navbar />
      <div className="event-page">
        <div className="event-info">
          <CreateEventForm
            selectedEventId={selectedEventId}
            setSelectedEventId={setSelectedEventId}
          />
          <CreateGiftModel
            setSelectedEventId={setSelectedEventId}
            selectedEventId={selectedEventId}
          />
          <CreateGiftList selectedEventId={selectedEventId} />
        </div>
      </div>

      <Footer />
    </>
  );
}
