'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Control extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Control.belongsTo(models.User, {
        foreignKey: {
          name: 'userId'
        },
        onDelete:'CASCADE'
      }),
      Control.belongsTo(models.Cause, {
        foreignKey: 'causeId',
        onDelete:'CASCADE'
      })
    }
  };
  Control.init({
    userId: DataTypes.INTEGER,
    causeId: DataTypes.INTEGER,
    description: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Control',
  });
  return Control;
};