'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PersonalQuestion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  PersonalQuestion.init({
    question: DataTypes.STRING,
    type: DataTypes.STRING,
    topic: DataTypes.STRING,
    amountOfOptions: DataTypes.STRING,
    option1: DataTypes.STRING,
    option2: DataTypes.STRING,
    option3: DataTypes.STRING,
    option4: DataTypes.STRING,
    correctOption: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'PersonalQuestion',
  });
  return PersonalQuestion;
};
