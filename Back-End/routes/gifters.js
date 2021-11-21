const express = require("express");
const router = express.Router();
const {db} = require("../lib/db");

/* GET gifters */

router.get("/", async (req, res, next) => {
 const {rows} = await db.query(`SELECT * from gifters`);
 console.log({event : rows})
 res.json(rows)
});

module.exports = router;
