const express = require('express');
const {
  getAllPersonalAnswers,
  getUserPersonalAnswers,
  getAllTriviaAnswers,
  getUserTriviaAnswers,
  getAllDistances,
  getUserDistances,
} = require("../controller/matching-controller");

const matchingRouter = express.Router();

matchingRouter.get('/personal-answers', getAllPersonalAnswers);
matchingRouter.get('/personal-answers/:id', getUserPersonalAnswers);
matchingRouter.get('/trivia-answers', getAllTriviaAnswers);
matchingRouter.get('/trivia-answers/:id', getUserTriviaAnswers);
matchingRouter.get('/distances', getAllDistances);
matchingRouter.get('/distances/:id', getUserDistances);

module.exports = matchingRouter;

// algorithm get all users statistics
// algorithm post distances
// match get distances
// update user likes table
