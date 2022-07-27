const brainmatesManager = require("../services/brainmates-manager");


async function postUserLike(req, res) {
  const { firstUserId, secondUserId, firstUserLikesSecondUser } = req.body;
  const responce = await brainmatesManager.postUserLike(firstUserId, secondUserId, firstUserLikesSecondUser);
  res.status(200).json(responce);
}

module.exports = {
  postUserLike
};
