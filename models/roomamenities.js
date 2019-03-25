'use strict';
module.exports = (sequelize, DataTypes) => {
  const RoomAmenities = sequelize.define('RoomAmenities', {
    roomId: DataTypes.INTEGER,
    amenitieId: DataTypes.INTEGER
  }, {});
  RoomAmenities.associate = function (models) {
    // associations can be defined here
    RoomAmenities.hasMany(models.Amenities, {
      foreignKey: 'id',
      sourceKey: 'amenitieId'
    });
    RoomAmenities.hasMany(models.Room, {
      foreignKey: 'id',
      sourceKey: 'roomId'
    });
  };
  return RoomAmenities;
};