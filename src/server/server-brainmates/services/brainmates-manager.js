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
    try {
      const likeBack = await getIsLikeFromTo(like.secondUserId, userId)
      brainmateInfo.status = likeBack ? 'like' : 'dislike';
      brainmateInfo.phoneNumber = likeBack ? brainmate.phoneNumber : '*********';
    } catch (error) {
      brainmateInfo.status = 'pending';
      brainmateInfo.phoneNumber = '*********';
    }
    brainmates.push(brainmateInfo);
  }
  return brainmates;
}

async function getIsLikeFromTo(likeFromUserId, likeToUserId){
  const likeInfo = await Like.findOne({
    where: {
      firstUserId: likeFromUserId,
      secondUserId: likeToUserId,
    }
  });
  return likeInfo.firstUserLikesSecondUser;
}

module.exports = {
  postUserLike,
  getBrainmatesForUser,
  getIsLikeFromTo
};
