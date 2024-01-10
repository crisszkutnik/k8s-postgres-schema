"use strict";

const { getNow } = require("../src/helpers");
const { TABLES } = require("../src/tables");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(TABLES.INCOMES, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      amount: {
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
      incomeSourceId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: TABLES.INCOME_SOURCES,
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
    await queryInterface.dropTable(TABLES.INCOMES);
  },
};
