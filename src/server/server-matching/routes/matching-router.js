const express = require('express');
const {
  getAllPersonalAnswers,
  getUserPersonalAnswers,
  getAllTriviaAnswers,
  getUserTriviaAnswers,
  getAllDistances,
  getUserDistances,
  postUserDistances,
  postAllUsersDistances
} = require("../controller/matching-controller");

const matchingRouter = express.Router();

matchingRouter.get('/personal-answers', getAllPersonalAnswers);
matchingRouter.get('/personal-answers/:id', getUserPersonalAnswers);
matchingRouter.get('/trivia-answers', getAllTriviaAnswers);
matchingRouter.get('/trivia-answers/:id', getUserTriviaAnswers);
matchingRouter.get('/distances', getAllDistances);
matchingRouter.get('/distances/:id', getUserDistances);

matchingRouter.post('/postdistances/:id', postUserDistances);
matchingRouter.post('/postdistances', postAllUsersDistances);

module.exports = matchingRouter;
