const { Like, Distance } = require('../../db/models');
const Sequelize = require('sequelize');

async function postUserLike(firstUserId, secondUserId, firstUserLikesSecondUser) {
  result = await Like.upsert({
    firstUserId: firstUserId,
    secondUserId: secondUserId,
    firstUserLikesSecondUser: firstUserLikesSecondUser
  });
  return result;
}

// async function getBrainmatesForUser(userId) {
//   const brainmates = await Distance.findAll({
//     where: {
//       userId: userId,
//       triviaDifference: {[Sequelize.Op.lt]: 1},
//       personalSimilarity: {[Sequelize.Op.gt]: -1},
//     },
//     order: [
//       ['triviaDifference', 'ASC'],
//       ['personalSimilarity', 'DESC']
//     ],
//     include: User
//   });
//   return brainmates;
// }

module.exports = {
  postUserLike,
  getBrainmatesForUser
};
