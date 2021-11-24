const { db } = require("../lib/db");

const createGift = async (req, res, next) => {
  const {
    gift_name,
    price,
    notes,
    store_url,
    quantity,
    most_wanted,
    event_id,
  } = req.body;
  const { rows } = db.query(
    `INSERT INTO gifts (gift_name, gift_name, price, notes,store_url,quantity,most_wanted )
     VALUES ($1, $2, $3, $4 , $5,$6,$7) RETURNING * `,
    [gift_name, gift_name, price, notes, store_url, quantity, most_wanted]
  );
  res.json({ success: true, data: rows });
};
const getGifts = async (req, res, next) => {
  const { event_id } = req.body;
  const { rows } = db.query(`SELECT * FROM  gifts  WHERE event_id=$1 `, [
    event_id,
  ]);
  res.json({ success: true, data: rows });
};

module.exports = { createGift, getGifts };
