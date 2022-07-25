const express = require("express");
const { sequelize } = require("./db/models");

async function test() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}
test();


const logger = require("./server-quiz/middleware/logger");
const itemRouter = require("./server-quiz/routes/itemRouter");

const app = express();

 app.get("/", (req, res) => {
  res.status(200).json({
    health: `ok`,
  });
});  


app.use(logger);

app.use("/questions", itemRouter);

const port = process.env.PORT || "8080";

app.listen(port, function () {
  console.log("Running on " + port);
});

module.exports = app;