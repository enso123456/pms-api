'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Amenities', [{
      name: 'Table Lamp',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'WIFI',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});


    await queryInterface.bulkInsert('RoomAmenities', [
      {
        roomId: 1,
        amenitieId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        roomId: 1,
        amenitieId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});

  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Amenities', null, {});
    await queryInterface.bulkDelete('RoomAmenities', null, {});
  }
};
