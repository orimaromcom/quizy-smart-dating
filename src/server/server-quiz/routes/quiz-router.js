const express = require("express");

const { getAllQuestions } = require("../controller/quiz-controller");

const quizRouter = express.Router();

quizRouter.get("/questions", getAllQuestions);

module.exports = quizRouter;
