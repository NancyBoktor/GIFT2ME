import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function DescriptionAlerts(props) {
  return (
    <Stack sx={{ width: "100%" }} spacing={2}>
      <Alert severity="info">
        <Stack spacing={2} direction="row">
          <Button variant="text" onClick={props.onClose}>
            X
          </Button>
        </Stack>
        <AlertTitle>Welcome :) </AlertTitle>
        <strong> You need to create the event first!!!!</strong>
      </Alert>
    </Stack>
  );
}
