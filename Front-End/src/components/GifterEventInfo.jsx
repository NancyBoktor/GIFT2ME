import "./GifterEventInfo.scss";
export default function GifterEventInfo(props) {
  const { eventInfo } = props;
  return (
    <div className="event-page">
      <div>{eventInfo.event_name}</div>
      <div>{eventInfo.date}</div>
      <div>{eventInfo.address}</div>
      <div>{eventInfo.description}</div>
    </div>
  );
}
