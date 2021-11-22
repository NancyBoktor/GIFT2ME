require('dotenv').config()
const express = require("express");
const path = require("path");
const logger = require("morgan");
const cors = require("cors");


const eventsRouter = require("./routes/events");
const giftsRouter = require("./routes/gifts");
const selectedGiftsRouter = require("./routes/selectedGifts")
const giftersRouter = require("./routes/gifters");
const authRouter = require("./routes/auth");

const app = express();
const corsOption = {
    origin: [process.env.CLIENTSIDE_DOMAIN],
    optionsSuccessStatus: 200,
    credentials:true
}

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(cors(corsOption));

app.use("/api/auth", authRouter);
app.use("/api/events", eventsRouter);
app.use("/api/gifters", giftersRouter);
app.use("/api/gifts", giftsRouter);
app.use("/api/selectedGifts", selectedGiftsRouter);

app.get("/logout", (req, res) => {});


module.exports = app;

