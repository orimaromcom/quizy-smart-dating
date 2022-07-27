const brainmatesManager = require("../services/brainmates-manager");


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

function ErrorIfNaN(id) {
  if (isNaN(id)) {
    const error = Error()
    error.statusCode = 400;
    error.message = 'Id should be a number';
    throw error;
  }
}

function ErrorIfNotFound(item) {
  if (!item) {
    const error = Error()
    error.statusCode = 404;
    error.message = 'Not found';
    throw error;
  }
}

module.exports = {
  postUserLike,
  getBrainmatesForUser
};
