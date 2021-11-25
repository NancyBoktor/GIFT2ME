import { createGift } from "../services/gift";
//import { Navigate } from "react-router";
import { useState } from "react";
//import GiftCard from "../components/GiftForm";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
//import MultipleSelectButton from "./MultipleSelectButton";
import DescriptionAlerts from "./Alert";
import "./CreateGiftModel.scss";
import { integerPropType } from "@mui/utils";
//import { Redirect } from "react-router";

export default function CreateGiftForm(props) {
  const [redirectUrl, setRedirectUrl] = useState(false);
  // const query_string = window.location.search;
  // let event_id = query_string.substr(10, query_string.length - 1);
  // event_id = parseInt(event_id);

  const [giftInfo, setGiftInfo] = useState({
    event_id: props.event_id,
    gift_name: "",
    price: integerPropType,
    notes: "",
    store_url: URL,
    quantity: integerPropType,
    most_wanted: false,
  });

  const handelCreateGift = async (event) => {
    //event.preventDefault();
    if (!giftInfo.event_id) {
      return <DescriptionAlerts />;
    }
    try {
      const giftData = await createGift(giftInfo, giftInfo.event_id);
      // setGiftInfo({ ...giftInfo, event_id: giftData.data.event_id });

      console.log("giftInfo", giftInfo);
      //  Navigate(`/gifts?event_id=${giftInfo.event_id}`);
    } catch (e) {
      console.log("error:", e);
    }
  };

  const onSave = async () => {
    const data = handelCreateGift();
    console.log("%%%%%%%%%%%", data);
    props.onCancel();
    return data;
  };

  return (
    <div className="create-gift-model">
      <Button className="close-button" onClick={props.onCancel}>
        X
      </Button>
      {/* <MultipleSelectButton /> */}
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
              multiline
            />
            {/* <Button
                onClick={() => {
                  setRedirectUrl(true);
                }}
              >
                {setRedirectUrl && <Redirect to={giftInfo.store_url} />}
              </Button>
            </TextField> */}

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
              onClick={onSave}
            >
              Save
            </Button>
          </Stack>
        </div>
      </div>
    </div>
  );
}
