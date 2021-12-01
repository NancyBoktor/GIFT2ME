import { useState, useEffect } from "react";
import { Button } from "@mui/material";
import CreateEventModal from "./CreateEventModal";
import WarningAlert from "./Alert";
import { createEvent, getEvent, editEvent } from "../services/event";
import "./CreateEventForm.scss";
import { useNavigate } from "react-router-dom";

export default function CreateEventForm(props) {
  const { selectedEventId, setSelectedEventId } = props;
  const navigate = useNavigate();
  const [eventData, setEventData] = useState({
    event_name: "",
    date: null,
    address: "",
    description: "",
  });
  const [open, setOpen] = useState(false);
  const [modalData, setModalData] = useState({
    type: "",
    key: "",
    multiline: false,
    dialogContent: "",
    required: false,
  });
  const [openWarningAlert, setOpenWarningAlert] = useState(false);

  useEffect(() => {
    return console.log("-->event-date", eventData.date);

    // eventData.date &&
    //   console.log(
    //     "--->eventDare/object",
    //     new Date(eventData.date.split("-")).toLocaleDateString()
    //   );
  }, [eventData.date]);

  useEffect(() => {
    const fetchEvent = async () => {
      const { data } = await getEvent(selectedEventId);
      console.log("->Data", data);
      setEventData(data);
    };
    if (selectedEventId) {
      fetchEvent();
    }
  }, [selectedEventId]);

  const handleCreateEvent = async () => {
    try {
      if (selectedEventId) {
        if (eventData.event_name === "") {
          setOpenWarningAlert(true);
          return;
        }
        const { data } = await editEvent({
          ...eventData,
          event_id: selectedEventId,
        });
        console.log("DataEvent----->", data);
      } else {
        if (eventData.event_name === "") {
          setOpenWarningAlert(true);
          return;
        }
        const { data } = await createEvent(eventData);

        console.log("DataEvent----->", data);
        setSelectedEventId(data.data.id);

        data.success && navigate(`/events/${data.data.id}/edit`);
      }
    } catch (e) {
      console.log("error:", e);
    }
  };

  const handleClickOpen = ({
    key,
    type,
    multiline = false,
    dialogContent,
    required = false,
  }) => {
    setOpen(true);
    setModalData({
      type,
      key,
      multiline,
      dialogContent,
      required,
    });
  };

  const onChange = (e) => {
    const { key } = modalData;
    setEventData({ ...eventData, [key]: e.target.value });
  };

  const handleSave = (value) => {
    const { key } = modalData;
    setEventData({ ...eventData, [key]: value });
    //console.log("hhhhhhhhhh", key);
    handleClose();
  };

  const handleClose = () => setOpen(false);

  return (
    <div>
      <h1 className="event">
        {selectedEventId ? "Edit Event" : "Create Event"}
      </h1>
      <div className="event-form-wrapper">
        <div className="event-card-row">
          <div class="card">
            <div class="inner-card">
              <img
                className="event-img"
                src="https://media-exp1.licdn.com/dms/image/C4D1BAQGPUNNtGVN_5Q/company-background_10000/0/1611841931800?e=2159024400&v=beta&t=XOYWnftOzpjtSkmhPqTsytKSIGBT4wVGZxELPLMdNVw"
                alt="thumbnail"
              />
            </div>
            <p className="card-text">Event Image</p>
          </div>
        </div>
        <div className="event-btn-fields">
          <div id="event-btns">
            <Button
              style={{ color: "#696666", fontFamily: "Raleway" }}
              variant="outlined"
              onClick={() =>
                handleClickOpen({ key: "event_name", type: "text" })
              }
            >
              <h1 className="event-name">
                {eventData.event_name ? eventData.event_name : "Event Name"}
              </h1>
            </Button>
          </div>
          <div id="event-btns">
            <Button
              style={{ color: "#696666", fontFamily: "Raleway" }}
              variant="outlined"
              onClick={() =>
                handleClickOpen({
                  key: "date",
                  type: "date",
                  // value: new Date(eventData.date)
                  //   .toLocaleDateString()
                  //   .replaceAll("/", "-"),
                })
              }
            >
              <h5 className="event-input-info">
                {eventData.date
                  ? `${eventData.date.replaceAll("/", "-").split("-")[0]}-${
                      eventData.date.replaceAll("/", "-").split("-")[1]
                    }-${
                      eventData.date
                        .replaceAll("/", "-")
                        .split("-")[2]
                        .split("T")[0]
                    }`
                  : "Date"}
              </h5>
            </Button>
          </div>
          <div id="event-btns">
            <Button
              style={{ color: "#696666", fontFamily: "Raleway" }}
              variant="outlined"
              onClick={() => handleClickOpen({ key: "address", type: "text" })}
            >
              <h5 className="event-input-info">
                {eventData.address ? eventData.address : "Address"}
              </h5>
            </Button>
          </div>
          <div id="event-btns">
            <span
              onClick={() =>
                handleClickOpen({
                  key: "description",
                  type: "text",
                  multiline: true,
                  dialogContent: "Please fill the description",
                })
              }
            >
              <h5 id="desc">
                {eventData.description ? eventData.description : "Description"}
              </h5>
            </span>
          </div>
          <div className="create-event-btn">
          {openWarningAlert && <WarningAlert />}
            <Button variant="contained" onClick={handleCreateEvent}>
              <h5 className="create-event-button">
                {selectedEventId ? "Edit Event" : "Create Event"}
              </h5>
            </Button>
            
          </div>
          
        </div>

        <CreateEventModal
          open={open}
          handleClose={handleClose}
          onChange={onChange}
          type={modalData.type}
          multiline={modalData.multiline}
          dialogContent={modalData.dialogContent}
          defaultValue={eventData[modalData.key]}
          handleSave={handleSave}
          required={modalData.required}
        />
      </div>
    </div>
  );
}
