const express = require('express');
const {
  getAllAnswers
} = require("../controller/brainmates-controller");

const brainmatesRouter = express.Router();

// it is not done, just a mock

brainmatesRouter.get('/answers', getAllAnswers);

module.exports = brainmatesRouter;
