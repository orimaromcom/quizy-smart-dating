const { User TriviaAnswer} = require("../../db/models");
const Sequelize = require("sequelize");

async function postUserInfo(userInfo) {
  result = await User.upsert({
    email: userInfo.email,
    username: userInfo.userName,
    photo: userInfo.picture,
    phoneNumber: userInfo.phone,
    age: userInfo.age,
    location: userInfo.location,
    gender: userInfo.gender,
    lookingForGender: userInfo.preferences.gender,
    lookingForRelationsType: userInfo.preferences.relation_type,
    lookingForMinAge: userInfo.preferences.minAge,
    lookingForMaxAge: userInfo.preferences.maxAge,
  });
  return result;
}

async function getUserInfo(email) {
  const user = await User.findOne({
    where: {
      email: email,
    },
  });
  const userInfo = {};

  if (user) {
    userInfo.id = user.id;
    userInfo.email = user.email;
    userInfo.userName = user.username;
    userInfo.phone = user.phoneNumber;
    userInfo.location = user.location;
    userInfo.age = user.age;
    userInfo.picture = user.photo;
    userInfo.gender = user.gender;
    userInfo.preferences = {
      relation_type: user.lookingForRelationsType,
      gender: user.lookingForGender,
      minAge: user.lookingForMinAge,
      maxAge: user.lookingForMaxAge,
    };
  } else {
    userInfo.id = null;
    userInfo.email = email;
    userInfo.userName = null;
    userInfo.phone = null;
    userInfo.location = null;
    userInfo.age = null;
    userInfo.picture = null;
    userInfo.gender = null;
    userInfo.preferences = {
      relation_type: null,
      gender: null,
      minAge: null,
      maxAge: null,
    };
  }
  return userInfo;
}

async function setTriviaStatistics(id) {
  result = await TriviaAnswer.create({
    userId: id,
    FilmCorrectAnswers: 0,
    FilmQuestionsAnswered: 0,
    SportsCorrectAnswers: 0,
    SportsQuestionsAnswered: 0,
    ComputersCorrectAnswers: 0,
    ComputersQuestionsAnswered: 0,
    CelebritiesCorrectAnswers: 0,
    CelebritiesQuestionsAnswered: 0,
    HistoryCorrectAnswers: 0,
    HistoryQuestionsAnswered: 0,
    MusicCorrectAnswers: 0,
    MusicQuestionsAnswered: 0
  });
  return result;
}

module.exports = {
  postUserInfo,
  getUserInfo,
  setTriviaStatistics
};
