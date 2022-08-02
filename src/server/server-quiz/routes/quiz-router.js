const express = require("express");
const auth = require('../../middleware/auth');

const {
  getAllQuestions,
  postAnswer,
  getRandomQuote,
} = require("../controller/quiz-controller");

const quizRouter = express.Router();

quizRouter.get("/questions", auth, getAllQuestions);

quizRouter.get("/quote", auth, getRandomQuote);

quizRouter.post("/answers", auth, postAnswer);

module.exports = quizRouter;
