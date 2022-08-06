'use strict';

const faker = require('faker');

const AMOUNT_OF_USERS = 200;

const PHOTOS = {
  "male": ['https://i1.lensdump.com/i/120JPz.jpg', 'https://i.lensdump.com/i/1203w0.png', 'https://i1.lensdump.com/i/120KtD.jpg', 'https://i2.lensdump.com/i/120pKq.jpg'],
  "female": ['https://i2.lensdump.com/i/120VjT.jpg', 'https://i3.lensdump.com/i/1209db.jpg', 'https://i.lensdump.com/i/120dM7.jpg', 'https://i1.lensdump.com/i/120qhr.jpg'],
  "other": ['https://i2.lensdump.com/i/120m6F.jpg', 'https://i3.lensdump.com/i/120sz3.jpg'],
}
const CITIES = ["Bat Yam", "Givatayim", "Haifa", "Herzliya", "Holon", "Nes Ziona", "Netanya", "Petah Tikva", "Raanana", "Ramat-Gan", "Ramla", "Rehovot", "Rishon Lezion", "Tel Aviv", "Yavne"];
const amountOfCities = CITIES.length;
const GENDERS = ["male", "female", "male", "female", "male", "female", "other"];
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
      const username = `${faker.name.firstName()}${randomInt(1, 100)}`;
      const gender = GENDERS[randomInt(0, amountOfGenders)];
      usersJSON.push({
        username: username,
        email: `${username.toLowerCase()}@gmail.com`,
        phoneNumber: faker.phone.phoneNumber('+972-5#-###-##-##'),
        photo: PHOTOS[gender][randomInt(0, PHOTOS[gender].length)],
        age: randomInt(20, 40),
        location: CITIES[randomInt(0, amountOfCities)],
        gender: gender,
        lookingForGender: "any",
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
