import { useParams } from "react-router-dom";
import react, { useEffect, useState } from "react";
import { getEvent } from "../services/event";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Event() {
  const { id } = useParams();
  const [event, setEvent] = useState({});

  useEffect(() => {
    (async () => {
      try {
        const { data } = await getEvent(id);
        console.log("data:", data)
        setEvent(data)
      } catch (e) {
        console.log("error:", e);
      }
    })()
  }, [id])


  return (
    <>
      <Navbar />
      <div className="event-page">
        <div>
          {event.event_name}
        </div>
        <div>
          {event.date}
        </div>
        <div>
          {event.address}
        </div>
        <div>
          {event.description}
        </div>
      </div>
      <Footer />
    </>
  )

}