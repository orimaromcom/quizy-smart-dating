const express = require('express');
const {
  postUserInfo,
  getUserInfo,
  setTriviaStatistics,
} = require("../controller/user-controller");

const userRouter = express.Router();

userRouter.post('/', postUserInfo);
userRouter.get('/:email', getUserInfo);
userRouter.post('/set-trivia/:id', setTriviaStatistics);

module.exports = userRouter;
