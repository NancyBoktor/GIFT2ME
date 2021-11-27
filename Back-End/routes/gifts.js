const express = require("express");
const router = express.Router();
const { db } = require("../lib/db");
const { isAuth } = require("../middleware/auth_middle");
const { createGift, getGifts } = require("../controllers/gift_controller");
/* GET all gifts */
router.get("/", isAuth, getGifts);

// POST CREAT NEW GIFT
// router.post("/", isAuth, createGift);

// GET gifts from specific user
// router.get("/:id", isAuth, async (req, res) => {
//   const { rows } = await db.query(`SELECT * from gifts WHERE user_id = $1`, [
//     req.current_user_id,
//   ]);
//   console.log({ gift: rows });
//   res.json(rows);
// });

module.exports = router;
