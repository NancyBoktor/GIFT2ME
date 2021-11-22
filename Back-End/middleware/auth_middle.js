const jwt = require("jsonwebtoken");

const isAuth = (req, res, next) => {
  console.log(req.cookies);
  const { token } = req.cookies;
  if (!token) {
    return res.status(401).json({ success: false, message: "Unauthorized !" });
  }
  const user = jwt.verify(token, process.env.TOKEN_SECRET);
  if (!user) {
    return res.status(401).json({ success: false, message: "Unauthorized !" });
  }
  req.current_user_id = user.id;
  next();
};

module.exports = {
  isAuth,
};
