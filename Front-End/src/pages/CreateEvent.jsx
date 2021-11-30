import { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import CreateEventForm from "../components/CreateEventForm";
// import CreateGiftModel from "../components/CreateGiftModel";
// import CreateGiftList from "../components/CreateGiftList";
import Footer from "../components/Footer";
import "../fontawesome";
import "./CreateEvent.scss";
// import { Button } from "@mui/material";

export default function CreateEventPage(props) {
  //const { id } = useParams();

  const [selectedEventId, setSelectedEventId] = useState(0);
  console.log("select", selectedEventId);
  // const invitationPage = (id) => {
  //   navigate(`/invitation/${id}`);
  // };
  // if (id) <Navigate to={`/events/${id}/edit`} />;
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
      {/* <Button onClick={() => invitationPage(id)}>View your invitation</Button> */}
      <Footer />
    </>
  );
}
