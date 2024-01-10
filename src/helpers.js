const { Sequelize } = require("sequelize");

function getNow() {
  return Sequelize.fn("NOW");
}

module.exports = {
  getNow,
};
