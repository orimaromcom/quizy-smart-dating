'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PersonalAnswer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      PersonalAnswer.belongsTo(models.User, {
        foreignKey: 'userId'
      });
      PersonalAnswer.belongsTo(models.PersonalQuestion, {
        foreignKey: 'questionId'
      });
    }
  }
  PersonalAnswer.init({
    userId: DataTypes.INTEGER,
    questionId: DataTypes.INTEGER,
    chosenOption: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'PersonalAnswer',
  });
  return PersonalAnswer;
};
