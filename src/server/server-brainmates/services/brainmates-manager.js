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
  const likeBack = [];
  const pending = [];
  const dislikeBack = [];
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
    brainmateInfo.picture = randomPicture();
    try {
      const likeBack = await getIsLikeFromTo(like.secondUserId, userId)
      brainmateInfo.status = likeBack ? 'likeBack' : 'dislikeBack';
    } catch (error) {
      brainmateInfo.status = 'pending';
    }
    switch (brainmateInfo.status) {
      case 'likeBack':
        brainmateInfo.phoneNumber = brainmate.phoneNumber;
        likeBack.push(brainmateInfo);
        break;
      case 'pending':
        brainmateInfo.phoneNumber = '*********';
        pending.push(brainmateInfo);

        break;
      case 'dislikeBack':
        brainmateInfo.phoneNumber = '*********';
        dislikeBack.push(brainmateInfo);
        break;
    }
  }
  return {
    likeBack: likeBack,
    pending: pending,
    dislikeBack: dislikeBack
  };
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

const PICTURES = [
  'https://skazki.land/api/get-resized-image/slonik-586f1.jpg?width=1024&height=1024&fit=inside',
  'https://flomaster.club/uploads/posts/2021-11/1636724510_1-flomaster-club-p-slonik-raskraska-dlya-detei-krasivie-1.png',
  'https://w7.pngwing.com/pngs/338/277/png-transparent-elephant-joke-elephant-in-the-room-child-elephant-s-cartoon-child-mammal-carnivoran.png'
]
function randomPicture() {
  return PICTURES[[Math.floor(Math.random() * PICTURES.length)]]
}

module.exports = {
  postUserLike,
  getBrainmatesForUser,
  getIsLikeFromTo
};
