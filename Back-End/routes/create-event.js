const express = require("express");
const router = express.Router();
const { db } = require("../lib/db");
const { isAuth } = require("../middleware/auth_middle");
const createEvent = require("../controllers/create-event");

/* POST new event */
router.post("/", isAuth, createEvent);
