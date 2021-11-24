require("dotenv").config();

const bcrypt = require("bcrypt");
const { db } = require("../lib/db");
const { getUserByEmail, createToken } = require("../lib/helper");

const salt = bcrypt.genSaltSync(10);

const login = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: "Please fill all required fields",
    });
  }
  const user = await getUserByEmail(email);
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
    //create the token
    const token = createToken({
      id: user.id,
      first_name: user.first_name,
      last_name: user.last_name,
    });
    res.cookie("token", token, {
      secure: true,
      httpOnly: true,
    });
    res.status(200).json({ success: true, message: "Login successful", token });
  });
};

const register = async (req, res, next) => {
  const { email, password, first_name, last_name, confirm_password } = req.body;
  console.log(
    "userInfo:",
    email,
    password,
    first_name,
    last_name,
    confirm_password
  );
  // validtaion
  if (!first_name || !last_name || !email || !password || !confirm_password) {
    return res.status(400).json({
      success: false,
      message: "Please fill all required fields",
    });
  }
  // validtaion the password
  if (password !== confirm_password) {
    return res.status(400).json({
      success: false,
      message: "Password must match",
    });
  }
  // validtaion the email
  const user = await getUserByEmail(email);
  if (user && user.email) {
    return res.status(400).json({
      success: false,
      message: "This email already exist",
    });
  }
  const hashPassword = await bcrypt.hash(password, salt);

  const { rows } = await db.query(
    `INSERT INTO 
  users (email, password, first_name, last_name) 
  VALUES ($1, $2, $3 , $4) 
  RETURNING *`,
    [email, hashPassword, first_name, last_name]
  );
  const newUser = rows[0];
  console.log("newUser:", newUser);
  const token = createToken({
    id: newUser.id,
    first_name: newUser.first_name,
    last_name: newUser.last_name,
  });
  console.log("token:", token);

  res.cookie("token", token, {
    secure: true,
    httpOnly: true,
  });

  res
    .status(200)
    .json({ success: true, message: "Register successful", token });
};

const logout = (req, res, next) => {
  console.log("logout", req.cookie);
  res.clearCookie("token");
  res.status(200).json({ sucess: true, message: "Logout successfully" });
};

module.exports = { login, register, logout };
