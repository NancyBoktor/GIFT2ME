import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getEvent } from "../services/event";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import EventWishList from "../components/EventWishList";
import GifterEventInfo from "../components/GifterEventInfo";
import { getGifts } from "../services/gift";

export default function Wishlist() {
  const { id } = useParams();
  const [eventInfo, setEventInfo] = useState({});
  const [gifts, setGifts] = useState([]);

  useEffect(() => {
    const handelEventInfo = async (id) => {
      try {
        const response = await getEvent(id);
        setEventInfo(response.data);
      } catch (e) {
        console.log("error:", e);
      }
    };
    const handelGiftsList = async (id) => {
      try {
        const response = await getGifts(id);
        setGifts(response.data.gifts);
      } catch (e) {
        console.log("error:", e);
      }
    };
    handelGiftsList(id);
    handelEventInfo(id);
  }, []);

  console.log("LLLLL");
  return (
    <>
      <Navbar />
      <GifterEventInfo eventInfo={eventInfo} />
      <EventWishList gifts={gifts} event_id={id} setGifts={setGifts} />
      <Footer />
    </>
  );
}
