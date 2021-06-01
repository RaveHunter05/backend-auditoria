'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Incidence extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Incidence.belongsTo(models.User, {
        foreignKey: 'userId',
        onDelete: 'CASCADE'
      }),
      Incidence.belongsTo(models.Risk, {
        foreignKey: 'riskId',
        onDelete: 'CASCADE'
      })
    }
  };
  Incidence.init({
    riskId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    controlId: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    price: DataTypes.DECIMAL(20,2)
  }, {
    sequelize,
    modelName: 'Incidence',
  });
  return Incidence;
};