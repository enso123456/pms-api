'use strict';
module.exports = (sequelize, DataTypes) => {
  const Room = sequelize.define('Room', {
    room_number: DataTypes.STRING
  }, {});
  Room.associate = function (models) {
    // associations can be defined here
    Room.belongsTo(models.RoomFeature, {
      foreignKey: 'id',
      targetKey: 'roomId'
    });
    Room.belongsTo(models.RoomAmenities, {
      foreignKey: 'id',
      targetKey: 'roomId'
    });
    Room.belongsTo(models.RoomTypes, {
      foreignKey: 'id',
      targetKey: 'roomId'
    });
  };
  return Room;
};