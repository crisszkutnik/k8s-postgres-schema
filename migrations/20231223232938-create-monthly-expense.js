"use strict";

const { getNow } = require("../src/helpers");
const { TABLES } = require("../src/tables");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(TABLES.MONTHLY_EXPENSES, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      amount: {
        allowNull: false,
        type: Sequelize.DOUBLE,
      },
      name: {
        type: Sequelize.STRING,
      },
      details: {
        type: Sequelize.STRING,
      },
      expenseCategoryId: {
        type: Sequelize.INTEGER,
        references: {
          model: TABLES.EXPENSE_CATEGORIES,
          key: "id",
        },
      },
      expenseSubcategoryId: {
        type: Sequelize.INTEGER,
        references: {
          model: TABLES.EXPENSE_SUBCATEGORIES,
          key: "id",
        },
      },
      paymentMethodId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: TABLES.PAYMENT_METHOD,
          key: "id",
        },
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: TABLES.USERS,
          key: "id",
        },
      },
      startMonth: {
        type: Sequelize.STRING,
      },
      endMonth: {
        type: Sequelize.STRING,
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
    await queryInterface.dropTable(TABLES.MONTHLY_EXPENSES);
  },
};
