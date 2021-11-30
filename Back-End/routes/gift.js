// const express = require("express");
// const router = express.Router();
// const { db } = require("../lib/db");

// router.put("/:gift_id", async (req, res) => {
//   const { event_id } = req.body;
//   const { gift_id } = req.params.id;

//   const { rows } = await db.query(
//     `UPDATE gifts SET  quantity = quantity - 1  WHERE event_id = $1 AND id=$2 `,
//     [event_id, gift_id]
//   );

//   res.json({ success: true, data: rows[0] });
// });
