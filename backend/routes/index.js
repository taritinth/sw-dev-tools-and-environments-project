const routes = require("./api");

const express = require("express");
const router = express.Router();

router.use("/api", routes);

module.exports = router;
