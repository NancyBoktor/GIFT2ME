const express = require("express");
const path = require("path");
//const cookieParser = require("cookie-parser");
const logger = require("morgan");
// const cookieSession = require("cookie-session");
const cors = require("cors");

const eventsRouter = require("./routes/events");
const usersRouter = require("./routes/users");
const giftsRouter = require("./routes/gifts");
const selectedGiftsRouter = require("./routes/selectedGifts")
const giftersRouter = require("./routes/gifters");
const authRouter = require("./routes/auth");


const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
// const sessionName = "ResourcesWallSession";
// app.use(
//   cookieSession({
//     name: sessionName,
//     secret: "WishListFinalProject",
//     sameSite: true,
//     resave: false,
//     saveUninitialized: true,
//     cookie: { secure: false, maxAge: null, httpOnly: true },
//   })
// );

app.use("/api/events", eventsRouter);
app.use("/api/users", usersRouter);
app.use("/api/gifts", giftsRouter);
app.use("/api/selectedGifts", selectedGiftsRouter);
app.use("/api/gifters", giftersRouter);
app.use("/api/auth", authRouter);


app.get("/logout", (req, res) => {});

module.exports = app;


