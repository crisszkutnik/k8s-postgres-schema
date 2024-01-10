"use strict";

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
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: TABLES.EXPENSE_CATEGORIES,
          key: "id",
        },
      },
      name: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      details: {
        allowNull: true,
        type: Sequelize.STRING,
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
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable(TABLES.EXPENSES);
  },
};
