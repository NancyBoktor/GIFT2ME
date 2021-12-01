const express = require("express");
const router = express.Router();
const { db } = require("../lib/db");
const { isAuth } = require("../middleware/auth_middle");

/* GET all gifters */

router.get("/", async (req, res, next) => {
  const { rows } = await db.query(`SELECT * from gifters`);
  // console.log({ gifter: rows });
  res.json(rows);
});

// GET gifters for specific user
router.get("/:id", isAuth, async (req, res, next) => {
  const { rows } = await db.query(`SELECT * from gifters WHERE user_id = $1`, [
    req.current_user_id,
  ]);
  // console.log({ gifter: rows });
  res.json(rows);
});

module.exports = router;
