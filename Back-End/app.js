const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const eventsRouter = require("./routes/events");
const usersRouter = require("./routes/users");
const wishListGiftsRouter = require("./routes/users");
const giftersRouter = require("./routes/gifters");
const login = require("./routes/login");
const register = require("./routes/register");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/api/events", eventsRouter);
app.use("/api/users", usersRouter);
app.use("/api/wishListGifts", wishListGiftsRouter);
app.use("/api/gifters", giftersRouter);
app.use("/login", wishListGiftsRouter);
app.use("/register", giftersRouter);

module.exports = app;
