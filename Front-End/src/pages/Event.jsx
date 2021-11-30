import { useParams } from "react-router-dom";
import react, { useEffect, useState } from "react";
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
  const [giftsLength, setGiftsLength] = useState(gifts.length);
  const handelGiftsList = async (id) => {
    try {
      const response = await getGifts(id);
      setGifts(response.data.gifts);
      setGiftsLength(gifts.length);
    } catch (e) {
      console.log("error:", e);
    }
  };

  useEffect(() => {
    handelGiftsList(id);
  }, [id, giftsLength]);

  const handelEventInfo = async (id) => {
    try {
      const response = await getEvent(id);

      setEventInfo(response.data);
    } catch (e) {
      console.log("error:", e);
    }
  };

  useEffect(() => {
    handelEventInfo(id);
  }, [id]);
  return (
    <>
      <Navbar />
      <GifterEventInfo eventInfo={eventInfo} />
      <EventWishList gifts={gifts} />
      <Footer />
    </>
  );
}
