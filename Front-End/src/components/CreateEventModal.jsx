import { useRef } from "react";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  DialogActions,
  Button,
} from "@mui/material";

const CreateEventModal = (props) => {
  const inputRef = useRef();
  const {
    open,
    handleClose,
    type,
    label,
    onChange,
    dialogContent,
    multiline = false,
    required = false,
    defaultValue,
    handleCancel,
    handleSave,
  } = props;
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Subscribe</DialogTitle>
      <DialogContent>
        <DialogContentText>{dialogContent}</DialogContentText>
        <TextField
          inputRef={inputRef}
          autoFocus
          margin="dense"
          type={type}
          fullWidth
          variant="standard"
          multiline={multiline}
          defaultValue={defaultValue}
          required={required}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={() => handleSave(inputRef.current.value)}>Save</Button>
      </DialogActions>
    </Dialog>
  );
};

export default CreateEventModal;
