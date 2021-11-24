import { useState } from "react";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Fab from "@mui/material/Fab";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import "./CreateGiftForm.scss";

export default function CreateItemForm(props) {
  const [itemInfo, setItemInfo] = useState(props);
  console.log("props", props);

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
            value={itemInfo.gift_name}
            onChange={(event) =>
              setItemInfo({ ...itemInfo, gift_name: event.target.value })
            }
          />
          <TextField
            id="outlined-textarea"
            label="Website Link (optional)"
            placeholder="http://...."
            href={itemInfo}
            multiline
          />
          <TextField
            id="outlined-textarea"
            label="Notes (optional)"
            placeholder="i want it to be red :)"
            value={itemInfo.notes}
            onChange={(event) =>
              setItemInfo({ ...itemInfo, notes: event.target.value })
            }
            multiline
          />
          <TextField
            id="outlined-name"
            label="Price (optional)"
            placeholder="$"
            value={itemInfo.price}
            onChange={(event) =>
              setItemInfo({ ...itemInfo, price: event.target.value })
            }
          />
          <TextField
            id="outlined-name"
            label="Quantity (optional)"
            placeholder="$"
            value={itemInfo.quantity}
            onChange={(event) =>
              setItemInfo({ ...itemInfo, quantity: event.target.value })
            }
          />
          <TextField
            id="outlined-multiline-static"
            label="Most Wanted"
            multiline
            rows={4}
            value={itemInfo.most_wanted}
            onChange={(event) =>
              setItemInfo({ ...itemInfo, most_wanted: event.target.value })
            }
          />
        </div>
      </Box>

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
          onClick={props.onSave}
        >
          Save
        </Button>
      </Stack>
    </div>
  );
}
