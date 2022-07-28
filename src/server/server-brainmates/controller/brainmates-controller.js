const brainmatesManager = require("../services/brainmates-manager");
const { ErrorIfNaN, ErrorIfNotFound } = require("../../server-matching/controller/matching-controller");


async function postUserLike(req, res) {
  const { firstUserId, secondUserId, firstUserLikesSecondUser } = req.body;
  const responce = await brainmatesManager.postUserLike(firstUserId, secondUserId, firstUserLikesSecondUser);
  res.status(200).json(responce);
}

async function getBrainmatesForUser(req, res) {
  let userId = Number.parseInt(req.params.id);
  ErrorIfNaN(userId);
  const brainmates = await brainmatesManager.getBrainmatesForUser(userId);
  ErrorIfNotFound(brainmates);
  res.status(200).json(brainmates);
}

async function getIsLikeFromTo(req, res) {
  let likeFromUserId = Number.parseInt(req.params.from);
  let likeToUserId = Number.parseInt(req.params.to);
  ErrorIfNaN(likeFromUserId);
  ErrorIfNaN(likeToUserId);
  let isLikeFromTo;
  try {
    isLikeFromTo = await brainmatesManager.getIsLikeFromTo(likeFromUserId, likeToUserId);
  } catch (error) {
    isLikeFromTo = false;
  }
  res.status(200).json(isLikeFromTo);
}

module.exports = {
  postUserLike,
  getBrainmatesForUser,
  getIsLikeFromTo
};
