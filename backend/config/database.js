const mongoose = require("mongoose");

const mockData = require("../test/__mock__/data");

const connectMockDB = () =>
  new Promise((resolve, reject) => {
    try {
      const mongoUnit = require("mongo-unit");
      console.log("Waiting for mock database...");
      mongoUnit.start().then(() => {
        process.env.MONGO_TEST_URL = mongoUnit.getUrl();

        mongoose.connect(process.env.MONGO_TEST_URL);
        mongoose.connection.once("open", () => {
          console.log(
            "MongoDB connection established successfully",
            mongoUnit.getUrl()
          );
          mongoUnit.load(mockData);
          resolve();
        });
      });
    } catch (err) {
      console.error(err);
      reject(err);
    }
  });

const connectRealDB = () =>
  new Promise((resolve, reject) => {
    try {
      mongoose.connect(process.env.ATLAS_URI);
      mongoose.connection.once("open", () => {
        console.log("MongoDB connection established successfully");
        resolve();
      });
    } catch (err) {
      console.error(err);
      reject(err);
    }
  });

module.exports = { connectMockDB, connectRealDB };
