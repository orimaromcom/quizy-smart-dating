const express = require('express');
const auth = require('../../middleware/auth');
const {
  postUserLike,
  getBrainmatesForUser,
  getIsLikeFromTo
} = require("../controller/brainmates-controller");

const brainmatesRouter = express.Router();

brainmatesRouter.post('/like', postUserLike);
brainmatesRouter.get('/like/:from/:to', auth, getIsLikeFromTo);
brainmatesRouter.get('/:id', auth, getBrainmatesForUser);

module.exports = brainmatesRouter;
