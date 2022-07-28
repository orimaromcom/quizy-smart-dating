'use strict';

const faker = require('faker');

const AMOUNT_OF_USERS = 200;

const CITIES = ["Bat Yam", "Givatayim", "Haifa", "Herzliya", "Holon", "Nes Ziona", "Netanya", "Petah Tikva", "Raanana", "Ramat-Gan", "Ramla", "Rehovot", "Rishon Lezion", "Tel Aviv", "Yavne"];
const amountOfCities = CITIES.length;
const GENDERS = ["male", "female", "other"];
const LOOK_FOR_GENDER = ["female", "male", "any"];
const amountOfGenders = GENDERS.length;
const RELATIONS = ["romantic", "friends"];
const amountOfRalations = RELATIONS.length;

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

module.exports = {
  up: async (queryInterface, Sequelize) => {

    const usersJSON = [];
    for(let i = 0; i < AMOUNT_OF_USERS; i++){
      const genderIndex = [randomInt(0, amountOfGenders)];
      usersJSON.push({
        username: `${faker.name.firstName()}${randomInt(1, 100)}`,
        phoneNumber: faker.phone.phoneNumber('+972 5# ### ## ##'),
        password: "123456",
        age: randomInt(20, 40),
        location: CITIES[randomInt(0, amountOfCities)],
        radius: randomInt(0, 50),
        gender: GENDERS[genderIndex],
        lookingForGender: LOOK_FOR_GENDER[genderIndex],
        lookingForRelationsType: RELATIONS[randomInt(0, amountOfRalations)],
        lookingForMinAge: randomInt(18, 22),
        lookingForMaxAge: randomInt(38, 45),
        createdAt: new Date(),
        updatedAt: new Date()
      });
    }
    await queryInterface.bulkInsert('Users', usersJSON, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
