"use strict";

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
        allowNull: true,
        type: Sequelize.STRING,
      },
      details: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      expenseCategoryId: {
        allowNull: false,
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
        references: {
          model: TABLES.PAYMENT_METHOD,
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
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable(TABLES.MONTHLY_EXPENSES);
  },
};
