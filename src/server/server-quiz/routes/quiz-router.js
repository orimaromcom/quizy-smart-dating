const express = require("express");

const {
  getAllQuestions,
  postAnswer,
  getRandomQuote,
} = require("../controller/quiz-controller");

const quizRouter = express.Router();

quizRouter.get("/questions", getAllQuestions);

quizRouter.get("/quote", getRandomQuote);

quizRouter.post("/answers", postAnswer);

module.exports = quizRouter;
