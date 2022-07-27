const { Like, User } = require('../../db/models');
const { getMatchingUserInfo } = require ('../../server-matching/services/matching-manager')
const Sequelize = require('sequelize');

async function postUserLike(firstUserId, secondUserId, firstUserLikesSecondUser) {
  result = await Like.upsert({
    firstUserId: firstUserId,
    secondUserId: secondUserId,
    firstUserLikesSecondUser: firstUserLikesSecondUser
  });
  return result;
}

async function getBrainmatesForUser(userId) {
  const brainmates = [];
  const likes = await Like.findAll({
    where: {
      firstUserId: userId,
      firstUserLikesSecondUser: true
    },
    include: User
  });
  for (like of likes) {
    const likeBack = await Like.findOne({
      where: {
        firstUserId: like.secondUserId,
        secondUserId: userId,
        firstUserLikesSecondUser: true
      }
    });
    if (likeBack) {
      const brainmate = like.User;
      const brainmateInfo = await getMatchingUserInfo(brainmate);
      brainmateInfo.phoneNumber = brainmate.phoneNumber
      brainmates.push(brainmateInfo);
    }
  }
  return brainmates;
}

module.exports = {
  postUserLike,
  getBrainmatesForUser
};
