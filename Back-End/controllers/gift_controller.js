const { db } = require("../lib/db");

const createGift = async (req, res, next) => {
  const {
    event_id,
    gift_name,
    price,
    notes,
    store_url,
    quantity,
    most_wanted,
  } = req.body;
  console.log(";;;;;;;;;;;;", req.body);
  try {
    const { rows } = await db.query(
      `INSERT INTO gifts ( event_id, gift_name, price, notes, store_url, quantity, most_wanted )
     VALUES ($1, $2, $3, $4 , $5, $6, $7) RETURNING * `,
      [event_id, gift_name, price, notes, store_url, quantity, most_wanted]
    );
    //console.log("giftData", rows);
    res.json({ success: true, data: rows });
  } catch (error) {
    console.log(error);
  }
};

const getGifts = async (req, res, next) => {
  const { event_id } = req.body;
  const { rows } = await db.query(`SELECT * FROM  gifts  WHERE event_id=$1 `, [
    event_id,
  ]);
  res.json({ success: true, data: rows });
};

module.exports = { createGift, getGifts };
