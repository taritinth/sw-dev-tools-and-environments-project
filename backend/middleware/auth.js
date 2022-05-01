require("dotenv").config();
const jwt = require("jsonwebtoken");
const accessToken = secrets.read("JWT_SECRET") || process.env.JWT_SECRET;

const isAuth = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader?.includes("Bearer ")) {
    return res.status(401).json({
      requireAuth: true,
      message: "Invalid token",
    });
  }
  const token = authHeader.split(" ")[1];
  jwt.verify(token, accessToken, async (err, user) => {
    if (err) {
      return res.status(403).json({
        message: "JWT must be provided",
      });
    }
    req.user = user;
    return next();
  });
};

module.exports = { isAuth };
