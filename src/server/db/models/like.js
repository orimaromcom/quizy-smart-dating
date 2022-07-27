'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Like extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Like.belongsTo(models.User, {
        foreignKey: 'firstUserId'
      });
      Like.belongsTo(models.User, {
        foreignKey: 'secondUserId'
      });
    }
  }
  Like.init({
    firstUserId: DataTypes.INTEGER,
    secondUserId: DataTypes.INTEGER,
    firstUserLikesSecondUser: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Like',
  });
  return Like;
};
