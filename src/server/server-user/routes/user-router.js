const express = require('express');
const auth = require('../../middleware/auth');
const { validateCreateUserSchema } =  require("../../middleware/validation.js");

const {
  postUserInfo,
  getUserInfo,
  setTriviaStatistics,
} = require("../controller/user-controller");

const userRouter = express.Router();

userRouter.post('/', auth, validateCreateUserSchema(), postUserInfo);
userRouter.get('/:email', auth, getUserInfo);
userRouter.post('/set-trivia/:id', auth, setTriviaStatistics);

module.exports = userRouter;
