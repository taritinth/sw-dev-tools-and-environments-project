const jwt = require("jsonwebtoken");
require("dotenv").config();
const secretKey = process.env.JWT_SECRET;

const generateToken = (data) => {
  return jwt.sign(data, secretKey);
};

module.exports = { generateToken };
