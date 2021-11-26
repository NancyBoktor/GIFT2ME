import { useState } from "react";
import { Button } from "@mui/material";
import CreateEventModal from "./CreateEventModal";
// import { createEvent } from "../services/event";
// import { useNavigate } from "react-router-dom";
//import Present from "../img/Gift.png";

import "./CreateEventForm.scss";

export default function CreateEventForm(props) {
  //   const navigate = useNavigate();
  const { eventData, setEventData } = props;
  const [open, setOpen] = useState(false);
  const [modalData, setModalData] = useState({
    type: "",
    key: "",
    multiline: false,
    dialogContent: "",
    required: false,
  });
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
    handleClose();
  };

  const handleClose = () => setOpen(false);

  return (
    <div>
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
        <div className="event-form">
          <Button
            variant="text"
            onClick={() => handleClickOpen({ key: "event_name", type: "text" })}
          >
            <h1 className="event-name">
              {eventData.event_name
                ? eventData.event_name
                : "My Wish List Name"}
            </h1>
          </Button>
          <Button
            variant="text"
            onClick={() => handleClickOpen({ key: "date", type: "date" })}
          >
            <h5 className="event-input-info">
              {eventData.date ? eventData.date : "Please Fill the date"}
            </h5>
          </Button>
          <Button
            variant="text"
            onClick={() => handleClickOpen({ key: "address", type: "text" })}
          >
            <h5 className="event-input-info">
              {eventData.address ? eventData.address : "Event Adress here!!"}
            </h5>
          </Button>

          <Button
            variant="text"
            onClick={() =>
              handleClickOpen({
                key: "description",
                type: "text",
                multiline: true,
                dialogContent: "Please fill the description",
              })
            }
          >
            <h5 className="event-input-info">
              {eventData.description
                ? eventData.description
                : "Please Fill the description"}
            </h5>
          </Button>

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
    </div>
  );
}
