import { useState } from "react";
import Navbar from "../components/Navbar";
import CreateEventForm from "../components/CreateEventForm";
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
        </div>
      </div>
      <Footer />
    </>
  );
}
