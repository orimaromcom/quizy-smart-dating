const express = require('express');
const {
  postUserLike,
  getBrainmatesForUser,
  getIsLikeFromTo
} = require("../controller/brainmates-controller");

const brainmatesRouter = express.Router();

brainmatesRouter.post('/like', postUserLike);
brainmatesRouter.get('/like/:from/:to', getIsLikeFromTo);
brainmatesRouter.get('/:id', getBrainmatesForUser);

module.exports = brainmatesRouter;
