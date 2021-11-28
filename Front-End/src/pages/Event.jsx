import { useParams } from "react-router-dom";
import react, { useEffect, useState } from "react";
// import axios from "axios";
import { getEvent } from "../services/event";

export default function Event() {
  const { id } = useParams();
  const [event, setEvent] = useState();

  useEffect (() => {
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
<div> 
</div>
  )
  
}