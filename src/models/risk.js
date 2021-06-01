'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Risk extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Risk.hasMany(models.Incidence, {
        foreignKey: {
          name: 'riskId'
        }
      }),
      Risk.hasMany(models.Cause, {
        foreignKey: {
          name: 'riskId'
        }
      })
    }
  };
  Risk.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Risk',
  });
  return Risk;
};