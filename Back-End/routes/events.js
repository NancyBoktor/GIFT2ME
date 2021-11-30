const express = require("express");
const router = express.Router();
const { db } = require("../lib/db");
const { isAuth } = require("../middleware/auth_middle");
const { createEvent, editEvent } = require("../controllers/event_controller");
const { route } = require("./gifts");

// /* GET all events */
// router.get("/all", async (req, res) => {
//   const { rows } = await db.query(`SELECT * from events`);
//   console.log({ event: rows });
//   res.json(rows);
// });

// GET specific event
router.get("/:id", isAuth, async (req, res) => {
  //console.log("Back---->end", req.params);
  const { rows } = await db.query(`SELECT * from events WHERE id = $1`, [
    req.params.id,
  ]);
  //console.log({ event: rows });
  res.json(rows[0]);
});

// EDIT AN EVENT
router.put("/:id", isAuth, async (req, res) => {
  // console.log("res:", res)
  const user_id = req.current_user_id;
  const { event_name, date, address, description } = req.body;
  const event_id = req.params.id;
  //console.log("user_id:", user_id);
  console.log("req.body:", {
    event_id,
    event_name,
    date,
    address,
    description,
  });
  const { rows } = await db.query(
    `UPDATE events SET event_name = $1, date = $2, address = $3, description = $4 WHERE id = $5 RETURNING id, event_name, date,address,description`,
    [event_name, date, address, description, event_id]
  );
  console.log("{return from edit--backend}", rows[0]);
  res.json({ success: true, data: rows[0] });
});

// GET events for logged in user. * DO NOT TOUCH*
router.get("/", isAuth, async (req, res) => {
  //console.log("req.current_user_id", req.current_user_id);
  const { rows } = await db.query(`SELECT * from events WHERE user_id = $1`, [
    req.current_user_id,
  ]);

  //console.log({ event: rows });
  res.json(rows);
});

// Delete an event for specific user
router.delete("/:id/delete", isAuth, async (req, res) => {
  console.log("REQ.PARAMS:", req.params.id);
  const { rows } = await db.query(`DELETE from events WHERE id = $1`, [
    req.params.id,
  ]);
  //console.log({ event: rows });
  res.json(rows);
});

router.post("/", isAuth, createEvent);

module.exports = router;
