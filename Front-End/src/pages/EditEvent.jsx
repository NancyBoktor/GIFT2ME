import { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import ReactDOM from "react-dom";
import axios from "axios";

/* ------ Styling ------- */
import { Button } from "@mui/material";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import Table from "@mui/material/Table";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TableContainer from "@mui/material/TableContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../fontawesome";
import "./CreateEvent.scss";

/* ------ Components ------- */
import GiftListHeader from "../components/GiftListHeader";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import CreateEventForm from "../components/CreateEventForm";
import CreateGiftModel from "../components/CreateGiftModel";
import CreateGiftList from "../components/CreateGiftList";

const theme = createTheme({
  palette: {
    cancel: {
      main: "#808080",
    },
  },
});

export default function EditEvent() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [selectedEventId, setSelectedEventId] = useState(id);

  // useEffect(() => {
  //   handleGiftsList(id);
  // }, [id]);

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
          />
          <CreateGiftList selectedEventId={selectedEventId} />
        </div>
      </div>
      <Button onClick={() => invitationPage(id)}>View your invitation</Button>
      <Footer />
    </>
  );
}
