const userManager = require("../services/user-manager");

async function postUserInfo(req, res) {
  const responce = await userManager.postUserInfo(req.body);
  res.status(200).json(responce);
}

async function getUserInfo(req, res) {
  const email = req.params.email;
  const userInfo = await userManager.getUserInfo(email);
  res.status(200).json(userInfo);
}

module.exports = {
  postUserInfo,
  getUserInfo,
};
