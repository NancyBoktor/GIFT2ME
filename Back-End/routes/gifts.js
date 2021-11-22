const express = require("express");
const router = express.Router();
const {db} = require("../lib/db");
const { isAuth } = require("../middleware/auth_middle");

/* GET all gifts */
router.get("/", async (req, res) => {
 const {rows} = await db.query(`SELECT * from gifts`);
 console.log({gift : rows})
 res.json(rows)
});

// GET gifts from specific user
router.get("/:id", isAuth, async (req, res) => {
  const {rows} = await db.query(`SELECT * from gifts WHERE user_id = $1`, [req.current_user_id]);
  console.log({gift : rows})
  res.json(rows)
 });

module.exports = router;
