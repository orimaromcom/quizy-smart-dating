const userManager = require("../services/user-manager");
const { ErrorIfNaN, ErrorIfNotFound } = require("../../server-matching/controller/matching-controller");

async function postUserInfo(req, res) {
  const responce = await userManager.postUserInfo(req.body);
  res.status(200).json(responce);
}

async function getUserInfo(req, res) {
  const id = req.params.id;
  ErrorIfNaN(id);
  const userInfo = await userManager.getUserInfo(id);
  ErrorIfNotFound(userInfo);
  res.status(200).json(userInfo);
}

module.exports = {
  postUserInfo,
  getUserInfo,
};
