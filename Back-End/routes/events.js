const express = require("express");
const router = express.Router();
const { db } = require("../lib/db");
const { isAuth } = require("../middleware/auth_middle");

/* GET all events */
router.get("/all", async (req, res) => {
  const { rows } = await db.query(`SELECT * from events`);
  console.log({ event: rows });
  res.json(rows);
});

// GET events for logged in user
router.get("/", isAuth, async (req, res) => {
  const { rows } = await db.query(`SELECT * from events WHERE user_id = $1`, [
    req.current_user_id
  ]);
  console.log({ event: rows });
  res.json(rows);
});

// GET events from specific user
router.get("/:id", isAuth, async (req, res) => {
  const { rows } = await db.query(`SELECT * from events WHERE user_id = $1`, [
    req.params.id
  ]);
  console.log({ event: rows });
  res.json(rows);
});

module.exports = router;
