import "./GifterEventInfo.scss";

export default function GifterEventInfo(props) {
  const { eventInfo } = props;
  console.log("eventinfo:", eventInfo)

  return (
    <div className="event-page">
      <h5>You are cordially invited to:</h5> 
      <h2>the<span> "{eventInfo.event_name}" </span> event</h2>    
      <h3>~{new Date(eventInfo.date).toLocaleDateString()}~</h3>
      <h3>{eventInfo.address}</h3>
      <p className="details"><strong>Details:</strong></p>
      <p className="description">{eventInfo.description}</p>
    </div>
  );
}
