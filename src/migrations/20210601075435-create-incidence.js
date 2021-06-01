'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Incidences', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      riskId: {
        type: Sequelize.INTEGER,
        references: {
          model:{
            tableName: 'Risks'
          },
          key: 'id'
        }
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model:{
            tableName: 'Users'
          },
          key: 'id'
        }
      },
      controlId: {
        type: Sequelize.INTEGER,
        references: {
          model:{
            tableName: 'Controls'
          },
          key: 'id'
        }
      },
      description: {
        type: Sequelize.TEXT
      },
      price: {
        type: Sequelize.DECIMAL(20,2)
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Incidences');
  }
};