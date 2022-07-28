const { PersonalAnswer, TriviaAnswer, Distance, User, Like } = require('../../db/models');
const Sequelize = require('sequelize');

const TOPICS = ['Film', 'Sports', 'Computers', 'Celebrities', 'History', 'Music']
const AMOUNT_OF_SUGGESTIONS = 3;

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
      userId: userId,
      triviaDifference: {[Sequelize.Op.lt]: 1},
      personalSimilarity: {[Sequelize.Op.gt]: -1},
    },
    order: [
      ['triviaDifference', 'ASC'],
      ['personalSimilarity', 'DESC']
    ],
    include: User
  });
}

async function getSuggestionsForUser(userId) {
  const distances = await getUserDistances(userId);
  const suggestions = [];
  for (distance of distances) {
    const alreadyLikedOrDisliked = await Like.findOne({
      where: {
        firstUserId: userId,
        secondUserId: distance.matchToUserId
      }
    })
    if (!alreadyLikedOrDisliked) {
      const userInfo = await getMatchingUserInfo(distance.User);
      userInfo.amountOfSamePersonalAnswers = distance.personalSimilarity;
      suggestions.push(userInfo);
    }
    if (suggestions.length === AMOUNT_OF_SUGGESTIONS) {
      break;
    }
  }
  return suggestions; // 0 <= suggestions.length <= AMOUNT_OF_SUGGESTIONS
}

async function getMatchingUserInfo(matchingUser) {

  const personalInfo = {
    userId: matchingUser.id,
    username: matchingUser.username,
    gender: matchingUser.gender,
    age: matchingUser.age,
    location: matchingUser.location,
  }

  triviaInfo = [];
  const triviaAnswers = await getUserTriviaAnswers(matchingUser.id);
  triviaAccuracy = calculateTriviaAccuracy(triviaAnswers);
  TOPICS.forEach((topic, i) => {
    triviaInfo.push([Math.round(triviaAccuracy[i] * 100), topic]);
  });
  triviaInfo.sort().reverse();
  const bestResult = triviaInfo[0];
  const bestResultDescription = `${bestResult[0]}% correct in ${bestResult[1]}`;

  return {...personalInfo, bestResultDescription};
}

async function postAllUsersDistances() {
  const allUsers = await User.findAll();
  const responses = [];
  for (user of allUsers) {
    try {
      responses.push(await postUserDistances(user.id));
    } catch (error) {
      console.log('This user does not have answers');
    }
  }
  return responses;
}

async function postUserDistances(userId) {
  const currentUser = await User.findOne({ where: { id: userId } });
  const otherUsers = await User.findAll({ where: { id: {[Sequelize.Op.not]:userId} } });
  const distances = []
  for (anotherUser of otherUsers) {
    const {triviaDifference, personalSimilarity} = await calculateDictance(currentUser, anotherUser);
    const distance = await Distance.upsert({
      userId: currentUser.id,
      matchToUserId: anotherUser.id,
      triviaDifference: Math.round(triviaDifference * 10) / 10,
      personalSimilarity: personalSimilarity
    });
    distances.push(distance);
  }
  return distances;
}

async function calculateDictance(firstUser, secondUser) {
  let personalSimilarity;
  let triviaDifference;
  if (isBasicMatchPossible(firstUser, secondUser)) {
    personalSimilarity = await calculatePersonalSimilarity(firstUser.id, secondUser.id);
    triviaDifference = await calculateTriviaDifference(firstUser.id, secondUser.id);
  } else {
    personalSimilarity = -1; // less then minimum
    triviaDifference = 1; // maximum
  }
  return { personalSimilarity, triviaDifference }
}

function isBasicMatchPossible(firstUser, secondUser){
  const agesFit = firstUser.age >= secondUser.lookingForMinAge &&
                  firstUser.age <= secondUser.lookingForMaxAge &&
                  secondUser.age >= firstUser.lookingForMinAge &&
                  secondUser.age <= firstUser.lookingForMaxAge;

  const relationsTypeFit = firstUser.lookingForRelationsType === secondUser.lookingForRelationsType;

  let genderFit;
  if (secondUser.lookingForGender === 'any' && firstUser.lookingForGender === 'any') {
    genderFit = true;
  } else {
    genderFit = firstUser.gender === secondUser.lookingForGender  &&
                secondUser.gender === firstUser.lookingForGender
  }
  // We ignore location and radius for now
  return agesFit && relationsTypeFit && genderFit;
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
  postUserDistances,
  postAllUsersDistances,
  getSuggestionsForUser,
  getMatchingUserInfo
};
