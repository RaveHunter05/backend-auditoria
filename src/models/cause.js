'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cause extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Cause.hasMany(models.Control, {
        foreignKey: {
          name: 'causeId'
        }
      })
    }
  };
  Cause.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Cause',
  });
  return Cause;
};