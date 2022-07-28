const faker = require('faker');

'use strict';

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const CITIES = ["Bat Yam", "Givatayim", "Haifa", "Herzliya", "Holon", "Nes Ziona", "Netanya", "Petah Tikva", "Raanana", "Ramat-Gan", "Ramla", "Rehovot", "Rishon Lezion", "Tel Aviv", "Yavne"];
const amountOfCities = CITIES.length;
const GENDERS = ["male", "female", "other"]
const amountOfGenders = GENDERS.length;
const RELATIONS = ["romantic", "friends"]
const amountOfRalations = RELATIONS.length;

module.exports = {
  up: async (queryInterface, Sequelize) => {

    const usersJSON = [];
    for(let i = 0; i < 500; i++){
      usersJSON.push({
        username: `${faker.name.firstName()}${randomInt(1, 100)}`,
        phoneNumber: faker.phone.phoneNumber('+972 5# ### ## ##'),
        password: "123456",
        age: randomInt(20, 40),
        location: CITIES[randomInt(0, amountOfCities)],
        radius: randomInt(0, 50),
        gender: GENDERS[randomInt(0, amountOfGenders)],
        lookingForGender: GENDERS[randomInt(0, amountOfGenders )],
        lookingForRelationsType: RELATIONS[randomInt(0, amountOfRalations)],
        lookingForMinAge: randomInt(20, 29),
        lookingForMaxAge: randomInt(30, 40),
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
