const express = require("express");
const router = express.Router();
const { login, register, logout } = require("../controllers/auth_controller");
const { isAuth } = require("../middleware/auth_middle");

/* login */
router.post("/login", login);

/* register */
router.post("/register", register);
router.post("/logout", isAuth, logout);

module.exports = router;
