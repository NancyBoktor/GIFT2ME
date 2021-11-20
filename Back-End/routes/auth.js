const express = require("express");
const router = express.Router();

/* login */
router.post("/login", (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: "Please fill all required fields",
    });
  }

  const user = {
    id: 1,
    name: "Nanacy ",
  };
  res.json({
    success: false,
    data: user,
    message: "Login successfully",
  });
});

/* login */
router.post("/register", (req, res, next) => {
  const { email, password, f_name, l_name, confirm_password } = req.body;
  if (!f_name || !l_name || !email || !password || !confirm_password) {
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
  // res
  const user = {
    id: 1,
    name: f_name,
  };
  res.json({
    success: true,
    data: user,
    message: "Login successfully",
  });
});

module.exports = router;
