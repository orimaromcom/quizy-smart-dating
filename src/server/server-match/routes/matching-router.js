const express = require('express');
const {
  getAllAnswers
} = require("./matching-api.js");

const matchingRouter = express.Router();

matchingRouter.get('/answers', getAllAnswers);

module.exports = matchingRouter;

// algorithm get all users statistics
// algorithm post distances
// match get distances
// update user likes table
