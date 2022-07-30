const express = require('express');
const {
  postUserInfo,
  getUserInfo,
} = require("../controller/user-controller");

const userRouter = express.Router();

userRouter.post('/', postUserInfo);
userRouter.get('/:id', getUserInfo);

module.exports = userRouter;
