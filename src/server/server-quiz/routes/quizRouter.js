const express = require("express");

const { getAllQuestions } = require("../controller/quizController");

const quizRouter = express.Router();

quizRouter.get("/questions", getAllQuestions);

module.exports = quizRouter;
