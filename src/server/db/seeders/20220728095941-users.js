'use strict';

const faker = require('faker');

const AMOUNT_OF_USERS = 200;

const PHOTOS = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlKi-dTKsqe-aBxkOJnNmIGZYcXM0zQDKQOKZmqjDfINherAww6IGqvB8k44XwNhYTSus&usqp=CAU", "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Icons8_flat_manager.svg/1024px-Icons8_flat_manager.svg.png", "https://w7.pngwing.com/pngs/463/1000/png-transparent-computer-icons-agriculture-farmer-crop-farmer-icon-hat-smiley-sticker.png","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoVki-W_uujCaTvpNM11TDow7Quak0v3sC-4HKViNS4pdPnqUdydTBFn0TQunXiPzQOUM&usqp=CAU","https://icons-for-free.com/iconfiles/png/512/businesswoman-131964752427078920.png","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzQ084FxUq-oiPAKnTDEEkdE4hTg7-VW4zACod2SL2M7suV96W5T6aVxaYTE2NZXmeEho&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStrKD9OguJb-KNJ5_64lPgd-FMP20dXQ5N89wQkTxza4Ti2X2ckRZbQGAAdzLL7_07n9Y&usqp=CAU"]
const amountOfPhotos = PHOTOS.length;
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
      const username = `${faker.name.firstName()}${randomInt(1, 100)}`;
      usersJSON.push({
        username: username,
        email: `${username}@gmail.com`,
        phoneNumber: faker.phone.phoneNumber('+972-5#-###-##-##'),
        photo: PHOTOS[randomInt(0, amountOfPhotos)],
        age: randomInt(20, 40),
        location: CITIES[randomInt(0, amountOfCities)],
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
