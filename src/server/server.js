const express = require("express");
const logger = require("./server-match/middleware/logger");
const matchingRouter = require("./server-match/routes/matching-router");

const app = express();

app.get("/", (req, res) => {
  res.status(200).json({
    health: `ok`,
  });
});

app.use(logger);
app.use('/matching', matchingRouter);

const port = process.env.PORT || "8080";

app.listen(port, function () {
  console.log("Running on " + port);
});

module.exports = app;
