import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getGifts } from "../services/gift";

/* ------ Styling ------- */
import { Button } from "@mui/material";
import "./CreateEvent.scss";

/* ------ Components ------- */
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import CreateEventForm from "../components/CreateEventForm";
import CreateGiftModel from "../components/CreateGiftModel";
import CreateGiftList from "../components/CreateGiftList";

export default function EditEvent() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [selectedEventId, setSelectedEventId] = useState(id);
  const [gifts, setGifts] = useState([]);

  const handleGiftsList = async (eventId) => {
    try {
      const response = await getGifts(eventId);
      setGifts(response.data.gifts);
    } catch (e) {
      console.log("error:", e);
    }
  };
  useEffect(() => {
    if (selectedEventId) {
      handleGiftsList(selectedEventId);
    }
  }, []);

  const invitationPage = (id) => {
    navigate(`/invitation/${id}`);
  };

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
            onCreate={handleGiftsList}
          />
          <CreateGiftList
            selectedEventId={selectedEventId}
            gifts={gifts}
            setSelectedEventId={setSelectedEventId}
          />
        </div>
      </div>
      <div className="view-invitation">
      <Button onClick={() => invitationPage(id)}>  View your invitation → </Button>
      </div>
      <Footer />
    </>
  );
}
