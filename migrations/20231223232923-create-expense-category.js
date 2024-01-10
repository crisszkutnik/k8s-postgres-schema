"use strict";

const { getNow } = require("../src/helpers");
const { TABLES } = require("../src/tables");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(TABLES.EXPENSE_CATEGORIES, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: TABLES.USERS,
          key: "id",
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: getNow(),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: getNow(),
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable(TABLES.EXPENSE_CATEGORIES);
  },
};
