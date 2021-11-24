import { useState } from "react";

import { createGift } from "../services/gift";
import { Navigate } from "react-router";

//import GiftCard from "../components/GiftForm";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

import "./CreateGifts.scss";
import { integerPropType } from "@mui/utils";

export default function CreateGiftForm() {
  const query_string = window.location.search;
  let event_id = query_string.substr(10, query_string.length - 1);
  event_id = parseInt(event_id);

  const [giftInfo, setGiftInfo] = useState({
    event_id,
    gift_name: "",
    price: integerPropType,
    notes: "",
    store_url: URL,
    quantity: integerPropType,
    most_wanted: false,
  });

  const handelCreateGift = async (event) => {
    //event.preventDefault();
    try {
      const giftData = await createGift(giftInfo);
      setGiftInfo({ ...giftInfo, event_id: giftData.data.event_id });

      console.log("giftInfo", giftInfo);
      Navigate(`/gifts?event_id=${giftInfo.event_id}`);
    } catch (e) {
      console.log("error:", e);
    }
  };

  const onCancel = () => {
    Navigate(`/gifts?event_id=${giftInfo.event_id}`);
  };

  // const onSave = async () => {
  //   const data = handelCreateGift();
  //   console.log("gift-data", data);
  //   return data;
  // };

  return (
    <div className="create-item-form">
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
          />
          <TextField
            id="outlined-textarea"
            label="Website Link (optional)"
            placeholder="http://...."
            href={giftInfo}
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
            onClick={onCancel}
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
      <div className="gift-card">
        {
          // <GiftCard
          //   gift_name={giftInfo.gift_name}
          //   store_url={giftInfo.store_url}
          //   most_wanted={giftInfo.most_wanted}
          //   notes={giftInfo.notes}
          //   price={giftInfo.price}
          //   Quantity={giftInfo.quantity}
          // />
        }
      </div>
    </div>
  );
}
