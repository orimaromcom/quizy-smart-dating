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
    const brainmate = like.User;
    const brainmateInfo = await getMatchingUserInfo(brainmate);
    const likeBackInfo = await Like.findOne({
      where: {
        firstUserId: like.secondUserId,
        secondUserId: userId,
      }
    });
    if (likeBackInfo) {
      if (likeBackInfo.firstUserLikesSecondUser) {
        brainmateInfo.status = 'like';
        brainmateInfo.phoneNumber = brainmate.phoneNumber
      } else {
        brainmateInfo.status = 'dislike';
      }
    } else {
      brainmateInfo.status = 'pending';
    }
    brainmates.push(brainmateInfo);
  }
  return brainmates;
}

module.exports = {
  postUserLike,
  getBrainmatesForUser
};
