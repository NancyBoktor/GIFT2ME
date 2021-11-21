const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const {getUserByEmail} = require("../lib/helper");
const bcrypt = require("bcrypt");
const {db} = require("../lib/db");

const salt = bcrypt.genSaltSync(10);

/* login */
router.post("/login", async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {  
    return res.status(400).json({
      success: false,
      message: "Please fill all required fields",
    });
  }
  const user = await getUserByEmail(email)
    if (!user) {  
    return res.status(401).json({
      success: false,
      message: "Wrong email or password",
    });
  }
  bcrypt.compare(password, user.password, function (err, samePassword) {
    if (!samePassword) {
      return res.status(401).send("Wrong email or password");
    }
    return res.json({ok:"ok"})
  });
});

/* register */
router.post("/register", async (req, res, next) => {
  const { email, password, first_name, last_name, confirm_password } = req.body;
  
  if (!first_name || !last_name || !email || !password || !confirm_password) {
    return res.status(400).json({
      success: false,
      message: "Please fill all required fields",
    });
  }
  if (password !== confirm_password) {
    return res.status(400).json({
      success: false,
      message: "Password must match",
    });
  }
    const user = await getUserByEmail(email)
  if (user && user.email) {
        return res.status(400).json({
      success: false,
      message: "This email already exist",
    });
  }
  const hashPassword = await bcrypt.hash(password, salt);

 const userId = await db.query(`INSERT INTO
final.users (email, password, first_name, last_name)
VALUES ($1, $2, $3 , $4)
RETURNING id;
` , [email, hashPassword, first_name, last_name]);
  console.log(userId)
  res.json({
    success: true,
    data: user,
    message: "creaed successfully",
  });
});

module.exports = router;
