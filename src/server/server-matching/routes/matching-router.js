const express = require('express');
const auth = require('../../middleware/auth');
const {
  getAllPersonalAnswers,
  getUserPersonalAnswers,
  getAllTriviaAnswers,
  getUserTriviaAnswers,
  getUserAchievements,
  getAllDistances,
  getUserDistances,
  postUserDistances,
  postAllUsersDistances,
  getSuggestionsForUser
} = require("../controller/matching-controller");

const matchingRouter = express.Router();

matchingRouter.get('/personal-answers', auth, getAllPersonalAnswers);
matchingRouter.get('/personal-answers/:id', auth, getUserPersonalAnswers);
matchingRouter.get('/trivia-answers', auth, getAllTriviaAnswers);
matchingRouter.get('/trivia-answers/:id', auth, getUserTriviaAnswers);
matchingRouter.get('/achievements/:id', auth, getUserAchievements);
matchingRouter.get('/distances', auth, getAllDistances);
matchingRouter.get('/distances/:id', auth, getUserDistances);
matchingRouter.get('/suggestions/:id', auth, getSuggestionsForUser);

matchingRouter.post('/postdistances/:id', auth, postUserDistances);
matchingRouter.post('/postdistances', auth, postAllUsersDistances);

module.exports = matchingRouter;
