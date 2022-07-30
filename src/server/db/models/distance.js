'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Distance extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Distance.belongsTo(models.User, {
      //   foreignKey: 'firstUserId'
      // });
      Distance.belongsTo(models.User, {
        foreignKey: 'secondUserId'
      });
    }
  }
  Distance.init({
    firstUserId: DataTypes.INTEGER,
    secondUserId: DataTypes.INTEGER,
    triviaDifference: DataTypes.FLOAT,
    personalSimilarity: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Distance',
  });
  return Distance;
};
