import { useState } from "react";
import { createGift } from "../services/gift";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import MultipleSelectButton from "./MultipleSelectButton";
import "./CreateGiftModel.scss";
import Modal from "@mui/material/Modal";

export default function CreateGiftForm(props) {
  const { giftInfo, setGiftInfo } = props;
  // const [giftInfo, setGiftInfo] = useState({
  //   event_id: "",
  //   gift_name: "",
  //   price: 0,
  //   notes: "",
  //   store_url: "",
  //   quantity: 0,
  //   most_wanted: false,
  // });

  const handelCreateGift = async () => {
    console.log(">>>>>>", giftInfo);
    if (!giftInfo.event_id) {
      return;
    }

    try {
      await createGift(giftInfo);
      console.log("giftInfo", giftInfo);
      props.onCancel();
    } catch (e) {
      console.log("error:", e);
    }
  };

  return (
    <Modal
      open={true}
      onClose={props.onCancel}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div className="create-gift-model">
        <Button className="close-button" onClick={props.onCancel}>
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
            <MultipleSelectButton setGiftInfo={setGiftInfo} />
            <div>
              <TextField
                id="outlined-multiline-flexible"
                label="What would you like?"
                placeholder="Chocolate!!"
                multiline
                maxRows={4}
                value={giftInfo.gift_name}
                onChange={(event) =>
                  setGiftInfo({ ...giftInfo, gift_name: event.target.value })
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
                  setGiftInfo({ ...giftInfo, store_url: event.target.value })
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
              {/* <Button
                variant="outlined"
                href="#outlined-buttons"
                onClick={props.onCancel}
              >
                Cancel
              </Button> */}
              <Button
                variant="outlined"
                href="#outlined-buttons"
                onClick={handelCreateGift}
              >
                ADD
              </Button>
            </Stack>
          </div>
        </div>
      </div>
    </Modal>
  );
}
