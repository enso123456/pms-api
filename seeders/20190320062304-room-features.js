'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Features', [{
      name: '4K TV',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Curve TV',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
    await queryInterface.bulkInsert('Rooms', [
      {
        room_number: '1',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        room_number: '2',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});

    await queryInterface.bulkInsert('RoomFeatures', [
      {
        roomId: 1,
        featureId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        roomId: 2,
        featureId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Features', null, {});
    await queryInterface.bulkDelete('Rooms', null, {});
    await queryInterface.bulkDelete('RoomFeatures', null, {});
  }
};
