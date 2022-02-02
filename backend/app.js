const express = require("express");
const app = express();

const { logger } = require("./middleware");

const PORT = 8080;

const router = require("./routes");
const cors = require("cors");
const helmet = require("helmet");

app.use(cors());
app.use(express.json());
app.use(helmet());
app.use(logger);
app.use(router);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
