const express = require("express");
const logger = require("./server-quiz/middleware/logger");

const app = express();

app.get("/", (req, res) => {
  res.status(200).json({
    health: `ok`,
  });
});

app.use(logger);

const port = process.env.PORT || "8080";

app.listen(port, function () {
  console.log("Running on " + port);
});

module.exports = app;
