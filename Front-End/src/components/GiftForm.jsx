import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "Gift_Name", headerName: "Gift_Name", width: 130 },
  { field: "URL", headerName: "URL", width: 130 },
  {
    field: "Notes",
    headerName: "Notes",
    type: "text",
    width: 90,
  },
  {
    field: "price",
    headerName: "Price",
    type: "number",
    width: 160,
  },
  {
    field: "Quantity",
    headerName: "Quantity",
    type: "number",
    width: 160,
  },
  {
    field: "most wanted",
    headerName: "Most_wanted",
    type: "number",
    width: 160,
  },
  {
    field: "Update",
    headerName: "Update",
    type: "number",
    width: 160,
  },
  {
    field: "Delete",
    headerName: "Delete",
    type: "number",
    width: 160,
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

export default function DataTable() {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}

// import * as React from "react";
// import Box from "@mui/material/Box";
// import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
// import CardContent from "@mui/material/CardContent";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
// import Stack from "@mui/material/Stack";

// export default function GiftCard(props) {
//   return (
//     <Box sx={{ minWidth: 275 }} className="card">
//       <Card variant="outlined">
//         <React.Fragment>
//           <CardContent>
//             <Typography
//               sx={{ fontSize: 14 }}
//               color="text.secondary"
//               gutterBottom
//             >
//               {props.gift_name}
//             </Typography>
//             <Typography variant="h5" component="div">
//               {props.store_url}
//             </Typography>
//             {/* <div>
//                 <Typography sx={{ mb: 1.5 }} color="text.secondary">
//                   {props.most_wanted ? <br>Most Wanted!!</br> : <br>""</br>}
//                 </Typography>
//               </div> */}
//             <Typography sx={{ mb: 1.5 }} color="text.secondary">
//               {props.notes}
//             </Typography>
//             {/* <Typography variant="body2">
//                 <br>$</br>
//                 {props.price}
//               </Typography> */}
//             <Typography variant="body2">
//               Quantity
//               <br />
//               {props.Quantity}
//             </Typography>
//           </CardContent>
//           <CardActions>
//             <Stack direction="row" spacing={2}>
//               <Button variant="contained" href="#contained-buttons">
//                 Delete
//               </Button>
//               <Button variant="contained" href="#contained-buttons">
//                 Edit
//               </Button>
//             </Stack>
//           </CardActions>
//         </React.Fragment>
//       </Card>
//     </Box>
//   );
// }
