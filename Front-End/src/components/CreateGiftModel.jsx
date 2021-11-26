import { useState } from "react";
import { createGift } from "../services/gift";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

import "./CreateGiftModel.scss";

export default function CreateGiftForm(props) {
  const [giftInfo, setGiftInfo] = useState({
    event_id: props.event_id,
    gift_name: "",
    price: 0,
    notes: "",
    store_url: "",
    quantity: 0,
    most_wanted: false,
  });

  const handelCreateGift = async (event) => {
    if (!props.event_id) {
      return false;
    }
    //console.log(";;;;;;;;event id", props.event_id);
    try {
      await createGift(giftInfo);
      props.onCancel();
    } catch (e) {
      console.log("error:", e);
    }
  };

  return (
    <div className="create-gift-model">
      <Button className="close-button" onClick={props.onCancel}>
        X
      </Button>

      <div>Greate your Gift :) </div>
      <div className="create-Gift-form">
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <div>
            <TextField
              id="outlined-multiline-flexible"
              label="What would you like?"
              placeholder="Chocklete!!"
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
              placeholder="i want it to be red :)"
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

            <FormControlLabel
              control={<Checkbox defaultChecked={giftInfo.most_wanted} />}
              label="Most wanted"
              defaultValue={false}
              onChange={(event) =>
                setGiftInfo({ ...giftInfo, most_wanted: true })
              }
            />
          </div>
        </Box>
        <div>
          <Stack direction="row" spacing={2}>
            <Button
              variant="outlined"
              href="#outlined-buttons"
              onClick={props.onCancel}
            >
              Cancel
            </Button>
            <Button
              variant="outlined"
              href="#outlined-buttons"
              onClick={handelCreateGift}
            >
              Save
            </Button>
          </Stack>
        </div>
      </div>
    </div>
  );
}
