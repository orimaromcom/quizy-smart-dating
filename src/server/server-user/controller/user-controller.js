const userManager = require("../services/user-manager");
const { ErrorIfNaN, ErrorIfNotFound } = require("../../common-errors");

async function postUserInfo(req, res) {
  const responce = await userManager.postUserInfo(req.body);
  res.status(200).json(responce);
}

async function getUserInfo(req, res) {
  const email = req.params.email;
  const userInfo = await userManager.getUserInfo(email);
  ErrorIfNotFound(userInfo);
  res.status(200).json(userInfo);
}

async function setTriviaStatistics(req, res) {
  console.log("****postUserInfo****");
  console.log('req.headers', req.headers);
  console.log("********");
  console.log("****postUserInfo****");
  console.log('req.body', req.body);
  console.log("********");
  let userId = Number.parseInt(req.params.id);
  ErrorIfNaN(userId);
  const responce = await userManager.setTriviaStatistics(userId);
  res.status(200).json(responce);
}

module.exports = {
  postUserInfo,
  getUserInfo,
  setTriviaStatistics,
};
