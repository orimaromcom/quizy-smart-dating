'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TriviaAnswer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      TriviaAnswer.belongsTo(models.User, {
        foreignKey: 'userId'
      });
    }
  }
  TriviaAnswer.init({
    userId: DataTypes.INTEGER,
    FilmCorrectAnswers: DataTypes.INTEGER,
    FilmQuestionsAnswered: DataTypes.INTEGER,
    SportsCorrectAnswers: DataTypes.INTEGER,
    SportsQuestionsAnswered: DataTypes.INTEGER,
    ComputersCorrectAnswers: DataTypes.INTEGER,
    ComputersQuestionsAnswered: DataTypes.INTEGER,
    CelebritiesCorrectAnswers: DataTypes.INTEGER,
    CelebritiesQuestionsAnswered: DataTypes.INTEGER,
    HistoryCorrectAnswers: DataTypes.INTEGER,
    HistoryQuestionsAnswered: DataTypes.INTEGER,
    MusicCorrectAnswers: DataTypes.INTEGER,
    MusicQuestionsAnswered: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'TriviaAnswer',
  });
  return TriviaAnswer;
};
