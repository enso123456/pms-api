'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Category');
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Category');
  }
};