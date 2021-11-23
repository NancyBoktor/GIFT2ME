const express = require("express");
const router = express.Router();
const { db } = require("../lib/db");
const { isAuth } = require("../middleware/auth_middle");
const { createEvent } = require("../controllers/event_controller");

/* GET all events */

router.get("/", isAuth, async (req, res) => {
  const { rows } = await db.query(`SELECT * from events`);
  console.log({ event: rows });
  res.json(rows);
});

// GET events from specific user
router.get("/:id", isAuth, async (req, res) => {
  const { rows } = await db.query(`SELECT * from events WHERE user_id = $1`, [
    req.current_user_id,
  ]);
  console.log({ event: rows });
  res.json(rows);
});

router.post("/", createEvent);

module.exports = router;
