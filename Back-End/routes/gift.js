const express = require("express");
const router = express.Router();
const { db } = require("../lib/db");

router.put("/:gift_id", async (req, res, next) => {
  const { event_id } = req.body;
  const { gift_id } = req.params;
  console.log(typeof event_id, typeof gift_id);
  await db.query(
    `Update gifts SET  quantity = quantity - 1  WHERE event_id = $1 AND id=$2 RETURNING * `,
    [event_id, gift_id]
  );
  const { rows } = await db.query(`SELECT * FROM  gifts  WHERE event_id=$1 `, [
    event_id,
  ]);
  //console.log(";;;;;;;", rows[0]);
  res.json({ success: true, data: rows });
});

router.get("/:gift_id", async (req, res, next) => {
  const { event_id } = req.query;
  // console.log(">>>>>>req.bodey", req.query);
  const { gift_id } = req.params;
  //console.log("event-id", typeof event_id);
  //console.log("gift-id", typeof gift_id);
  // const { rows } = await db.query(
  //   `SELECT * FROM gifts WHERE id = $2 AND event_id = $1 `,
  //   [gift_id, event_id]
  // );

  // console.log("getGift--->Back-end", rows[0]);
  // res.json({ success: true, data: rows[0] });
});
module.exports = router;
