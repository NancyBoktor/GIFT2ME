import * as React from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

export default function SuccessAlert() {
  return (
    <Stack sx={{ width: "100%" }} spacing={2}>
      <Alert variant="outlined" severity="success">
        You have successfully edited an event!
      </Alert>
    </Stack>
  );
}
