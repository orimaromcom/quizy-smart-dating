const express = require("express");

const {
  getAllQuestions,
  postAnswer,
} = require("../controller/quiz-controller");

const quizRouter = express.Router();

quizRouter.get("/questions", getAllQuestions);

quizRouter.post("/answers", postAnswer);

module.exports = quizRouter;
