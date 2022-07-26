const { PersonalAnswer, TriviaAnswer, Distance } = require('../../db/models');
const Sequelize = require('sequelize');

async function getAllPersonalAnswers() {
  return await PersonalAnswer.findAll();
}

async function getUserPersonalAnswers(userId) {
  return await PersonalAnswer.findAll({
    where: {
      id: userId
    }
  });
}

async function getAllTriviaAnswers() {
  return await TriviaAnswer.findAll();
}

async function getUserTriviaAnswers(userId) {
  return await TriviaAnswer.findOne({
    where: {
      id: userId
    }
  });
}

async function getAllDistances() {
  return await Distance.findAll();
}

async function getUserDistances(userId) {
  return await Distance.findAll({
    where: {
      id: userId
    }
  });
}

/*
  In POST request (when answered anough questions to achieve the heart)
  we calculate the distances for a userId:
  - 1) triviaDifference (ASC): Mean difference in % of right answer for each topic
      For answered Topics:
      TopicDefference = abs(User1TopicCorrect/User1TopicAnswered - User2TopicCorrect/User2TopicAnswered)
      triviaDifference = Sum of all TopicsDefferences / Amount of Topics
  - 2) personalSimilarity (DESK): Amount of same personal answers

  In GET request (when the user presses the heart) for current user
  we sort the users by: triviaDifference (ASC) and personalSimilarity (DESK)
  we check IsBasicMatchPossible to TOP-3 (if not, check the next one)

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
  getUserDistances
};
