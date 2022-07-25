'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    age: DataTypes.NUMBER,
    location: DataTypes.STRING,
    radius: DataTypes.NUMBER,
    gender: DataTypes.STRING,
    lookingForGender: DataTypes.STRING,
    relations: DataTypes.STRING,
    minAge: DataTypes.NUMBER,
    maxAge: DataTypes.NUMBER
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
