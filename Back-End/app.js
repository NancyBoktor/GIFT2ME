require("dotenv").config();
const express = require("express");
const path = require("path");
const logger = require("morgan");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const eventsRouter = require("./routes/events");
const giftsRouter = require("./routes/gifts");
const selectedGiftsRouter = require("./routes/selectedGifts");
const giftersRouter = require("./routes/gifters");
const authRouter = require("./routes/auth");

const app = express();
const corsOption = {
  origin: [process.env.CLIENTSIDE_DOMAIN],
  optionsSuccessStatus: 200,
  credentials: true,
};

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(cookieParser());
app.use(cors(corsOption));

app.use("/api/auth", authRouter);
app.use("/api/events", eventsRouter);
app.use("/api/gifts", giftsRouter);
app.use("/api/gifters", giftersRouter);
app.use("/api/selectedGifts", selectedGiftsRouter);

module.exports = app;
