const express = require("express");

const { getQuestions } = require("../controller/itemController");

const quizRouter = express.Router();

quizRouter.get("/questions", getQuestions);

module.exports = quizRouter;
