"use strict";

const { TABLES } = require("../src/tables");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(TABLES.USD_EXCHANGE_RATE, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      timestamp: {
        type: Sequelize.TIME,
      },
      day: {
        type: Sequelize.STRING(2),
        allowNull: false,
      },
      month: {
        type: Sequelize.STRING(10),
        allowNull: false,
      },
      year: {
        type: Sequelize.STRING(4),
        allowNull: false,
      },
      oficial: {
        allowNull: false,
        type: Sequelize.DOUBLE,
      },
      blue: {
        allowNull: false,
        type: Sequelize.DOUBLE,
      },
      mep: {
        allowNull: false,
        type: Sequelize.DOUBLE,
      },
      ccl: {
        allowNull: false,
        type: Sequelize.DOUBLE,
      },
    });
    await queryInterface.addIndex(TABLES.USD_EXCHANGE_RATE, [
      "day",
      "month",
      "year",
      "timestamp",
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable(TABLES.USD_EXCHANGE_RATE);
  },
};
