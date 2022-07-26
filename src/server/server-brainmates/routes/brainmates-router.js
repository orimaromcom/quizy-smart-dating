const express = require('express');
const {
  getAllAnswers
} = require("../controller/brainmates-controller");

const brainmatesRouter = express.Router();

brainmatesRouter.get('/answers', getAllAnswers);

module.exports = brainmatesRouter;

// algorithm get all users statistics
// algorithm post distances
// match get distances
// update user likes table
