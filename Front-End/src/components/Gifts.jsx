import { Navigate } from "react-router";

export default function Gifts() {
  const renderGifts = async () => {
    const handelRenderGifts = async () => {
      //   event.preventDefault();
      try {
        await getGifts();
        Navigate("/events");
      } catch (e) {
        console.log("error:", e);
      }
    };
  };
  return;
}
