"use strict";

const { TABLES } = require("../src/tables");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(TABLES.INCOME_SOURCES, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: TABLES.USERS,
          key: "id",
        },
      },
      name: {
        type: Sequelize.STRING,
      },
      incomeCategoryId: {
        type: Sequelize.INTEGER,
        references: {
          model: TABLES.INCOME_CATEGORIES,
          key: "id",
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable(TABLES.INCOME_SOURCES);
  },
};
