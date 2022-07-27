const { PersonalAnswer, TriviaAnswer, Distance, User } = require('../../db/models');
const Sequelize = require('sequelize');

const TOPICS = ['Film', 'Sports', 'Computers', 'Celebrities', 'History', 'Music']

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



  // using firstUser and secondUser we can compare here their settings as well
  // and if settings are contradictive to leave personalSimilarity at 0
  // or or even set it to -1 and not to check triviaDifference in this case
  // and set triviaDifference to a fake maximum

  const personalSimilarity = await calculatePersonalSimilarity(firstUser.id, secondUser.id);
  const triviaDifference = await calculateTriviaDifference(firstUser.id, secondUser.id);

  await Distance.upsert({
    userId: firstUser.id,
    matchToUserId: secondUser.id,
    triviaDifference: Math.round(triviaDifference * 10) / 10,
    personalSimilarity: personalSimilarity
  });
}

function IsBasicMatchPossible(User1, User2){
  // There is no info (User1->User2) in Likes table.
  // User1Age >= User2LookingForMinAge &&
  // User1Age <= User2LookingForMaxAge &&
  // User2Age >= User1LookingForMinAge &&
  // User2Age <= User1LookingForMaxAge &&
  // User1LookingForRelationsType === User1LookingForRelationsType &&
  // User1Gender === User2LookingForGender if User2LookingForGender !== 'any' &&
  // User2Gender === User1LookingForGender if User1LookingForGender !== 'any'

  // We ignore location and radius for now
}

async function calculateTriviaDifference(firstUserId, secondUserId) {
  let triviaDifference = 1;
  const firstUserTriviaAnswers = await getUserTriviaAnswers(firstUserId);
  const firstUserTriviaAccuracy = calculateTriviaAccuracy(firstUserTriviaAnswers);
  const secondUserTriviaAnswers = await getUserTriviaAnswers(secondUserId)
  if (secondUserTriviaAnswers) {
    triviaDifference = 0;
    const secondUserTriviaAccuracy = calculateTriviaAccuracy(secondUserTriviaAnswers.dataValues);
    for (let i = 0; i < TOPICS.length; i++) {
      triviaDifference += Math.abs(firstUserTriviaAccuracy[i] - secondUserTriviaAccuracy[i])
    }
    triviaDifference = triviaDifference / TOPICS.length;
  }
  return Math.round(triviaDifference * 10) / 10;
}

function calculateTriviaAccuracy(UserTriviaAnswers) {
  const accuracies = []
  TOPICS.forEach(topic => {
    const topicAccuracy = UserTriviaAnswers[`${topic}CorrectAnswers`] / (UserTriviaAnswers[`${topic}QuestionsAnswered`] + 1);
    accuracies.push(Math.round(topicAccuracy * 100) / 100);
  });
  return accuracies;
}

async function calculatePersonalSimilarity(firstUserId, secondUserId) {
  let personalSimilarity = 0;
  const firstUserPersonalAnswers = await getUserPersonalAnswers(firstUserId);
  for (firstUserAnswer of firstUserPersonalAnswers) {
    const secondUserAnswer = await getUserPersonalAnswerToQuestion(secondUserId, firstUserAnswer.questionId)
    if (secondUserAnswer && secondUserAnswer.dataValues.chosenOption === firstUserAnswer.chosenOption) {
      personalSimilarity += 1;
    }
  }
  return personalSimilarity;
}

module.exports = {
  getAllPersonalAnswers,
  getUserPersonalAnswers,
  getAllTriviaAnswers,
  getUserTriviaAnswers,
  getAllDistances,
  getUserDistances,
  postUserDistances
};
