import "./GifterEventInfo.scss";

export default function GifterEventInfo(props) {
  const { eventInfo } = props;
  return (
    <div className="event-page">
      <h1>I am inviting you to: </h1>
      <div>{eventInfo.event_name}</div>
      <div>{new Date(eventInfo.date).toLocaleDateString()}</div>
      <div>{eventInfo.address}</div>
      <div>{eventInfo.description}</div>
    </div>
  );
}
