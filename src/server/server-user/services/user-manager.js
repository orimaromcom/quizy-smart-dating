const { User } = require('../../db/models');
const Sequelize = require('sequelize');

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
    lookingForMaxAge: userInfo.preferences.maxAge
  });
  return result;
}

async function getUserInfo(id){
  const user = await User.findOne({
    where: {
      id: id
    }
  });
  const userInfo = {};
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
    maxAge: user.lookingForMaxAge
  };
  return userInfo;
}

module.exports = {
  postUserInfo,
  getUserInfo,
};
