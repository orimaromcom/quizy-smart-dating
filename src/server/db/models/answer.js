'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Answer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Answer.init({
    userId: DataTypes.INTEGER,
    questionId: DataTypes.INTEGER,
    chosenOption: DataTypes.STRING,
    correctOption: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Answer',
  });
  return Answer;
};