const express = require("express");
const { sequelize } = require("./db/models");
const bodyParser = require("body-parser");
const cors = require("cors");

const logger = require("./middleware/logger");

const quizRouter = require("./server-quiz/routes/quiz-router");
const matchingRouter = require("./server-matching/routes/matching-router");
const brainmatesRouter = require("./server-brainmates/routes/brainmates-router");
const userRouter = require("./server-user/routes/user-router");

async function test() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}
test();

const app = express();
//app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.status(200).json({
    health: `ok`,
  });
});

app.use(logger);

app.use("/matching", matchingRouter);

app.use("/quiz", quizRouter);
app.use("/matching", matchingRouter);
app.use("/brainmates", brainmatesRouter);
app.use("/user", userRouter);

const port = process.env.PORT || "8080";

app.listen(port, function () {
  console.log("Running on " + port);
});

module.exports = app;
