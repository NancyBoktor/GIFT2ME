import { useState } from "react";
import { Button } from "@mui/material";
import CreateEventModal from "./CreateEventModal";

import "./CreateEventForm.scss";

export default function CreateEventForm(props) {
  const { eventData, setEventData, event } = props;
  console.log("event.data:", eventData)
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
  console.log("event date ",eventData.date);
  return (
    <div>
      <h1 className="event">Create Event </h1>
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
          {/* <div>
            <TextField
                required
                id="outlined-required"
                label="Required"
                defaultValue={
                  eventData.event_name ? eventData.event_name : "Event Name"
                }
                onClick={() =>
                  handleClickOpen({
                    key: "event_name",
                    type: "text",
                    dialogContent: "Please choose an event name",
                  })
                }
              />
            </div>
            <div>
              <TextField
                id="outlined-optional"
                label="Optional"
                defaultValue={eventData.date ? eventData.date : "Date"}
                onClick={() =>
                  handleClickOpen({
                    key: "date",
                    type: "date",
                    dialogContent: "Please set a date",
                  })
                }
              />
            </div>
            <div>
              <TextField
                id="outlined-optional"
                label="Optional"
                defaultValue={eventData.address ? eventData.address : "Address"}
                onClick={() =>
                  handleClickOpen({
                    key: "address",
                    type: "text",
                    dialogContent: "Please fill the address",
                  })
                }
              />
            </div>
            <div>
              <TextField
                id="outlined-multiline-flexible"
                label="Optional"
                defaultValue={
                  eventData.description ? eventData.description : "Description"
                }
                onClick={() =>
                  handleClickOpen({
                    key: "description",
                    type: "text",
                    multiline: true,
                    dialogContent: "Please fill the description",
                  })
                }
              />
          </div> */}

          <div id="event-btns">
            <Button
              style={{color: '#696666', fontFamily:'Raleway'}}
              variant="outlined"
              href="#outlined-buttons"
              onClick={() =>
                handleClickOpen({ key: "event_name", type: "text" })
              }
            >
              <h1 className="event-name">
                {eventData.event_name
                  ? eventData.event_name
                  : (event?.event_name ? event.event_name : "Event Name")}
              </h1>
            </Button>
          </div>
          <div id="event-btns">
            <Button
              style={{color: '#696666', fontFamily:'Raleway'}}
              variant="outlined"
              href="#outlined-buttons"
              onClick={() => handleClickOpen({ key: "date", type: "date" })}
            >
              <h5 className="event-input-info">
                {eventData.date ? (new Date(eventData.date.split("-"))).toLocaleDateString() : (event?.date ? (new Date(event.date.split("-"))).toLocaleDateString()  : "Date")}
              </h5>
            </Button>
          </div>
          <div id="event-btns">
            <Button
              style={{color: '#696666', fontFamily:'Raleway'}}
              variant="outlined"
              href="#outlined-buttons"
              onClick={() =>
                handleClickOpen({ key: "address", type: "text" })
              }
            >
              <h5 className="event-input-info">
                {eventData.address
                  ? eventData.address
                  : (event?.address ? event.address : "Address")}
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
                  dialogContent: "Please fill the description"
                })
              }><h5 id="desc">
              {eventData.description
                ? eventData.description
                : (event?.description ? event.description : "Description")}
            </h5>
            </span>

            {/* <Button
                variant="outlined"
                href="#outlined-buttons"
                maxRows={4}
                onClick={() =>
                  handleClickOpen({
                    key: "description",
                    type: "text",
                    multiline: true,                    
                    dialogContent: "Please fill the description"
                  })
                }
              >
                <h5 className="event-input-info">
                  {eventData.description
                    ? eventData.description
                    : "Description"}
                </h5>
              </Button> */}
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
