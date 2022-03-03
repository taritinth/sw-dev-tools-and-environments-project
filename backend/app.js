const express = require("express");
const app = express();

const { logger } = require("./middleware");

const { connectMockDB, connectRealDB } = require("./config/database");

const PORT = process.env.PORT || 8080;

const router = require("./routes");
const cors = require("cors");
// const path = require("path");
const helmet = require("helmet");
require("dotenv").config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(logger);
app.use(router);

console.log("NODE_ENV=", process.env.NODE_ENV);

let connectDB;
if (process.env.NODE_ENV !== "test") {
  connectDB = connectRealDB();
} else {
  if (process.env.TEST_ENV === "e2e") {
    connectDB = connectMockDB();
  }
}

connectDB.then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
  });
});

module.exports = app;
