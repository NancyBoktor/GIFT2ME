const express = require("express");
const router = express.Router();
const { db } = require("../lib/db");
const { isAuth } = require("../middleware/auth_middle");
const { createGift, getGifts } = require("../controllers/gift_controller");
/* GET all gifts */
router.get("/", getGifts);   // <- removed isAuth so gifters can see gift list

// POST CREATE NEW GIFT
router.post("/", isAuth, createGift);

// GET gifts from specific user
router.get("/:id", isAuth, async (req, res) => {
  const { rows } = await db.query(`SELECT * from gifts WHERE user_id = $1`, [
    req.current_user_id,
  ]);
  res.json(rows);
});

// Delete a gift for specific event
router.delete("/:id/delete", isAuth, async (req, res) => {
  console.log("REQ.PARAMS:", req.params.id);
  const { rows } = await db.query(`DELETE from gifts WHERE id = $1`, [
    req.params.id,
  ]);
  //console.log({ event: rows });
  res.json(rows);
});

module.exports = router;
