import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Modal from "@mui/material/Modal";
import "./CreateGiftModel.scss";

import MultipleSelectButton from "./MultipleSelectButton";
import { createGift } from "../services/gift";

export default function CreateGiftModel(props) {
  const { setSelectedEventId, selectedEventId } = props;

  const navigate = useNavigate();
  const [openGiftModel, setOpenGiftModel] = useState(false);
  const [giftInfo, setGiftInfo] = useState({
    event_id: selectedEventId,
    gift_name: "",
    price: 0,
    notes: "",
    store_url: "",
    quantity: 0,
    most_wanted: false,
  });

  const onCancel = () => {
    setOpenGiftModel(false);
  };

  const handleCreateGift = async () => {
    if (selectedEventId === 0) {
      return;
    }
    try {
      await createGift(giftInfo);
      onCancel();
      navigate(`/events/${selectedEventId}/edit`);
    } catch (e) {
      console.log("error:", e);
    }
  };

  const handleSelectEvent = (event_id) => {
    setSelectedEventId(event_id);
  };

  return (
    <div>
      <Button
        variant="contained"
        onClick={() => {
          setOpenGiftModel(true);
        }}
      >
        <h5 className="create-event-button">Add Gifts</h5>
      </Button>
      {openGiftModel && (
        <Modal
          open={true}
          onClose={onCancel}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <div className="create-gift-model">
            <Button className="close-button" onClick={onCancel}>
              X
            </Button>

            <div>Add Gift </div>
            <div className="create-Gift-form">
              <Box
                component="form"
                sx={{
                  "& .MuiTextField-root": { m: 1, width: "25ch" },
                }}
                noValidate
                autoComplete="off"
              >
                <MultipleSelectButton
                  onChange={handleSelectEvent}
                  selectedEventId={selectedEventId}
                />
                <div>
                  <TextField
                    id="outlined-multiline-flexible"
                    label="What would you like?"
                    placeholder="Chocolate!!"
                    multiline
                    maxRows={4}
                    value={giftInfo.gift_name}
                    onChange={(event) =>
                      setGiftInfo({
                        ...giftInfo,
                        gift_name: event.target.value,
                      })
                    }
                    required
                    autoComplete="off"
                  />
                  <TextField
                    id="outlined-textarea"
                    label="Website Link (optional)"
                    placeholder="http://...."
                    href={giftInfo}
                    value={giftInfo.store_url}
                    onChange={(event) =>
                      setGiftInfo({
                        ...giftInfo,
                        store_url: event.target.value,
                      })
                    }
                    multiline
                  />
                  <TextField
                    id="outlined-textarea"
                    label="Notes (optional)"
                    placeholder="no white chocolate >:("
                    value={giftInfo.notes}
                    onChange={(event) =>
                      setGiftInfo({ ...giftInfo, notes: event.target.value })
                    }
                    multiline
                  />
                  <TextField
                    id="outlined-name"
                    label="Price (optional)"
                    placeholder="$"
                    value={giftInfo.price}
                    onChange={(event) =>
                      setGiftInfo({ ...giftInfo, price: event.target.value })
                    }
                  />
                  <TextField
                    id="outlined-name"
                    label="Quantity (optional)"
                    placeholder="Number"
                    value={giftInfo.quantity}
                    onChange={(event) =>
                      setGiftInfo({ ...giftInfo, quantity: event.target.value })
                    }
                  />
                </div>
                <FormControlLabel
                  control={<Checkbox defaultChecked={giftInfo.most_wanted} />}
                  label="Most Wanted"
                  defaultValue={false}
                  onChange={(event) =>
                    setGiftInfo({ ...giftInfo, most_wanted: true })
                  }
                />
              </Box>
              <div className="modal-buttons">
                <Stack direction="row" spacing={2}>
                  <Button variant="outlined" onClick={handleCreateGift}>
                    ADD
                  </Button>
                </Stack>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}
