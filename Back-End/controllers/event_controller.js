const { db } = require("../lib/db");

const createEvent = async (req, res, next) => {
  const user_id = req.current_user_id;
  const { event_name, date, address, description } = req.body;
  const rows = db.query(
    `INSERT INTO events (user_id, event_name, date, address, description )
     VALUES ($1, $2, $3, $4 , $5) RETURNING * `,
    [user_id, event_name, date, address, description]
  );
  console.log(rows);
};
module.exports = {createEvent  };
