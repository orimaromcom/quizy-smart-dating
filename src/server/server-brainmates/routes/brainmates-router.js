const express = require('express');
const {
  postUserLike
} = require("../controller/brainmates-controller");

const brainmatesRouter = express.Router();

brainmatesRouter.post('/like', postUserLike);

module.exports = brainmatesRouter;
