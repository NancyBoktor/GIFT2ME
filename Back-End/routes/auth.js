const express = require("express");
const router = express.Router();
const { login, register, logout } = require("../controllers/auth_controller");

/* login */
router.post("/login", login);

/* register */
router.post("/register", register);
router.post("/logout", logout);

module.exports = router;
