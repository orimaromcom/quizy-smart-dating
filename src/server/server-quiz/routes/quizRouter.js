const express = require("express");

const { getQuestions } = require("../controller/quizController");

const quizRouter = express.Router();

quizRouter.get("/questions", getQuestions);

module.exports = quizRouter;
