"use strict";

const { getNow } = require("../src/helpers");
const { TABLES } = require("../src/tables");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(TABLES.EXPENSES, {
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
      expenseCategoryId: {
        type: Sequelize.INTEGER,
        references: {
          model: TABLES.EXPENSE_CATEGORIES,
          key: "id",
        },
      },
      name: {
        type: Sequelize.STRING,
      },
      details: {
        type: Sequelize.STRING,
      },
      expenseSubcategoryId: {
        type: Sequelize.INTEGER,
        references: {
          model: TABLES.EXPENSE_SUBCATEGORIES,
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
      paymentMethodId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: TABLES.PAYMENT_METHOD,
          key: "id",
        },
      },
      monthlyExpenseId: {
        type: Sequelize.INTEGER,
        references: {
          model: TABLES.MONTHLY_EXPENSES,
          key: "id",
        },
      },
      date: {
        type: Sequelize.DATE,
        allowNull: false,
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
    await queryInterface.dropTable(TABLES.EXPENSES);
  },
};
