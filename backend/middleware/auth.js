require("dotenv").config();
const jwt = require("jsonwebtoken");
const { User } = require("../models/users.model");
const accessToken = process.env.JWT_SECRET;

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

const isOwner = async (req, res, next) => {
  let userId = req.params.id;
  User.findById(userId)
    .then((user) => {
      if (req.user.id == userId) {
        return next();
      }
      res.status(401).send("Unauthorized");
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
};

module.exports = { isAuth, isOwner };
