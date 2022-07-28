const express = require('express');
const {
  postUserLike,
  getBrainmatesForUser
} = require("../controller/brainmates-controller");

const brainmatesRouter = express.Router();

brainmatesRouter.post('/like', postUserLike);
brainmatesRouter.get('/:id', getBrainmatesForUser);

module.exports = brainmatesRouter;
