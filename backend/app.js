const express = require("express");
const app = express();

const { logger } = require("./middleware");

const PORT = process.env.PORT || 8080;

const router = require("./routes");
const cors = require("cors");
// const path = require("path");
const mongoose = require("mongoose");
const mongoUnit = require("mongo-unit");
const helmet = require("helmet");
require("dotenv").config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(logger);
app.use(router);

if (process.env.NODE_ENV !== "test") {
  app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
    console.log("NODE_ENV=", process.env.NODE_ENV);
  });

  mongoose.connect(process.env.ATLAS_URI);
  mongoose.connection.once("open", () => {
    console.log("MongoDB connection established successfully");
  });
}

// temp test for jest
// mongoUnit.start().then(() => {
//   console.log("Mock MongoDB is connected: ", mongoUnit.getUrl());
//   process.env.MONGO_TEST_URL = mongoUnit.getUrl();
//   console.log("NODE_ENV=", process.env.NODE_ENV);
// });

// } else {
//   mongoUnit.start().then(() => {
//     console.log("Mock MongoDB is connected: ", mongoUnit.getUrl());
//     process.env.MONGO_TEST_URL = mongoUnit.getUrl();
//     console.log("NODE_ENV=", process.env.NODE_ENV);
//   });
// }
module.exports = app;
