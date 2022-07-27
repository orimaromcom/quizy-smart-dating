const { PersonalAnswer, TriviaAnswer, Distance, User } = require('../../db/models');
const Sequelize = require('sequelize');

async function getAllPersonalAnswers() {
  return await PersonalAnswer.findAll();
}

async function getUserPersonalAnswers(userId) {
  return await PersonalAnswer.findAll({
    where: {
      userId: userId
    }
  });
}
async function getUserPersonalAnswerToQuestion(userId, questionId) {
  return await PersonalAnswer.findOne({
    where: {
      userId: userId,
      questionId: questionId
    }
  });
}

async function getAllTriviaAnswers() {
  return await TriviaAnswer.findAll();
}

async function getUserTriviaAnswers(userId) {
  return await TriviaAnswer.findOne({
    where: {
      userId: userId
    }
  });
}

async function getAllDistances() {
  return await Distance.findAll();
}

async function getUserDistances(userId) {
  return await Distance.findAll({
    where: {
      userId: userId
    },
    order: [
      ['triviaDifference', 'ASC'],
      ['personalSimilarity', 'DESC']
    ],
  });
}

async function postUserDistances(userId) {
  const currentUser = await User.findOne({
    where: {
      id: userId
    }
  });
  const otherUsers = await User.findAll({
    where: {
      id: {[Sequelize.Op.not]:userId}
    }
  });
  for (anotherUser of otherUsers) {
    await calculateDictance(currentUser, anotherUser);
  }
  return {'Distanses updated for user': userId}
}

async function calculateDictance(firstUser, secondUser) {

  const personalSimilarity = await calculatePersonalSimilarity(firstUser, secondUser); // mock
  const triviaDifference = Math.round(Math.random() * 10) / 10; // mock

  await Distance.upsert({
    userId: firstUser.id,
    matchToUserId: secondUser.id,
    triviaDifference: triviaDifference,
    personalSimilarity: personalSimilarity
  });
}

async function calculateTriviaDifference(firstUser, secondUser) {
  // to be updated and used
  const firstUserTriviaAnswers = getUserTriviaAnswers(firstUser.id)
  const secondUserTriviaAnswers = getUserTriviaAnswers(secondUser.id)
}

async function calculatePersonalSimilarity(firstUser, secondUser) {
  // using firstUser and secondUser we can compare here their settings as well
  // and if settings are contradictive to leave personalSimilarity at 0
  // or or even set it to -1 and not to check triviaDifference in this case
  // and set triviaDifference to a fake maximum
  let personalSimilarity = 0;
  const firstUserPersonalAnswers = await getUserPersonalAnswers(firstUser.id);
  for (firstUserAnswer of firstUserPersonalAnswers) {
    const secondUserAnswer = await getUserPersonalAnswerToQuestion(secondUser.id, firstUserAnswer.questionId)
    if (secondUserAnswer && secondUserAnswer.dataValues.chosenOption === firstUserAnswer.chosenOption) {
      personalSimilarity += 1;
    }
  }
  return personalSimilarity;
}


/*
  In POST request (when answered enough questions to achieve the heart)
  we calculate the distances for a userId:
  - 1) triviaDifference (ASC): Mean difference in % of right answer for each topic
      For answered Topics:
      TopicDefference = abs(User1TopicCorrect/User1TopicAnswered - User2TopicCorrect/User2TopicAnswered)
      triviaDifference = Sum of all TopicsDefferences / Amount of Topics
  - 2) personalSimilarity (DESK): Amount of same personal answers

  In GET request (when the user presses the heart) for current user
  we sort the users by: triviaDifference (ASC) and personalSimilarity (DESK)
  we check IsBasicMatchPossible to TOP-3

  **** For IsBasicMatchPossible We need to GET Likes and User Info *****

  IsBasicMatchPossible(User1, User2)?
  There is no info (User1->User2) in Likes table.
  User1Age >= User2LookingForMinAge &&
  User1Age <= User2LookingForMaxAge &&
  User2Age >= User1LookingForMinAge &&
  User2Age <= User1LookingForMaxAge &&
  User1LookingForRelationsType === User1LookingForRelationsType &&
  User1Gender === User2LookingForGender if User2LookingForGender !== 'any' &&
  User2Gender === User1LookingForGender if User1LookingForGender !== 'any'

  We ignore location and radius for now

 */

module.exports = {
  getAllPersonalAnswers,
  getUserPersonalAnswers,
  getAllTriviaAnswers,
  getUserTriviaAnswers,
  getAllDistances,
  getUserDistances,
  postUserDistances
};
