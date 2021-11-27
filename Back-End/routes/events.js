const express = require("express");
const router = express.Router();
const { db } = require("../lib/db");
const { isAuth } = require("../middleware/auth_middle");
const { createEvent } = require("../controllers/event_controller");

// /* GET all events */
// router.get("/all", async (req, res) => {
//   const { rows } = await db.query(`SELECT * from events`);
//   console.log({ event: rows });
//   res.json(rows);
// });

// GET events from specific user
router.get("/:id", isAuth, async (req, res) => {
  console.log("Back---->end", req.params);
  const { rows } = await db.query(`SELECT * from events WHERE user_id = $1`, [
    req.params.id,
  ]);
  console.log({ event: rows });
  res.json(rows);
});
// GET events for logged in user
// router.get("/", isAuth, async (req, res) => {
//   console.log("-;;;;;;useridbackend", req.current_user_id);
//   const { rows } = await db.query(`SELECT * from events WHERE user_id = $1`, [
//     req.current_user_id,
//   ]);

//   console.log({ event: rows });
//   res.json(rows);
// });

// Delete an event for specific user
router.delete("/delete/:id", isAuth, async (req, res) => {
  console.log("REQ.PARAMS:", req.params.id);
  const { rows } = await db.query(`DELETE from events WHERE id = $1`, [
    req.params.id,
  ]);
  console.log({ event: rows });
  res.json(rows);
});

router.post("/", isAuth, createEvent);


module.exports = router;
