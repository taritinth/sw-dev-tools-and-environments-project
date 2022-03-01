const express = require("express");
const app = express();

const { logger } = require("./middleware");

const PORT = 8080;

const router = require("./routes");
const cors = require("cors");
// const path = require("path");
const mongoose = require("mongoose");
const helmet = require("helmet");
require("dotenv").config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(logger);
app.use(router);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
  console.log("NODE_ENV=", process.env.NODE_ENV);
});

let uri = process.env.ATLAS_URI;

if (process.env.NODE_ENV === "test") {
  uri = process.env.ATLAS_TEST_URI;
}

mongoose.connect(uri);
mongoose.connection.once("open", () => {
  console.log("MongoDB connection established successfully");
});

module.exports = app;
