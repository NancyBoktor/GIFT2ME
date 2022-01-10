const express = require("express");
const router = express.Router();
const { db } = require("../lib/db");

router.put("/:gift_id", async (req, res, next) => {
  const { event_id } = req.body;
  const { gift_id } = req.params;
  await db.query(
    `Update gifts SET quantity = quantity - 1  WHERE event_id = $1 AND id=$2 RETURNING * `,
    [event_id, gift_id]
  );
  const { rows } = await db.query(`SELECT * FROM  gifts  WHERE event_id=$1 `, [
    event_id,
  ]);
  console.log("rows[0]", rows[0]);
  res.json({ success: true, data: rows });
});

router.get("/:gift_id/edit", async (req, res) => {
  const { event_id } = req.query;
  const { gift_id } = req.params;

  console.log(
    "Back-end-get-event_id",
    event_id,
    "------>params",
    req.params.gift_id
  );
  console.log("Back-end-get-gift_id", gift_id);

  const giftInfo = await db.query(
    `SELECT * FROM gifts WHERE id = $1 AND event_id = $2`,
    [gift_id, event_id]
  );
  res.json({ success: true, data: giftInfo.rows[0] });
  console.log("giftInfo---->Back-End", giftInfo.rows[0]);
});

router.put("/:gift_id/edit", async (req, res, next) => {
  const { name, quantity, store_url, most_wanted, price, notes, event_id } =
    req.body;
  console.log("BackEnd---req.body", req.body);
  const { gift_id } = req.params;
  console.log("BackEnd---giftId", gift_id);
  await db.query(
    `Update gifts SET name=$1, quantity=$2, store_url=$3, most_wanted=$4, price=$5, notes=$6  WHERE event_id = $1 AND id=$2 RETURNING * `,
    [name, quantity, store_url, most_wanted, price, notes, event_id, gift_id]
  );
  const { rows } = await db.query(`SELECT * FROM  gifts  WHERE event_id=$1 `, [
    event_id,
  ]);
  console.log("BackEnd---giftId", rows[0]);
  res.json({ success: true, data: rows });
});
module.exports = router;
