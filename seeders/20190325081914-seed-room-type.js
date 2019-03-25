'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Category', [{
      name: 'Queen',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Superior',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Deluxe',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});

    await queryInterface.bulkInsert('RoomTypes', [
      {
        roomId: 1,
        categoriesId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        roomId: 1,
        categoriesId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Category', null, {});
    await queryInterface.bulkDelete('RoomTypes', null, {});
  }
};
