'use strict';
module.exports = (sequelize, DataTypes) => {
  const Booking = sequelize.define('Booking', {
    roomId: DataTypes.INTEGER,
    checkin: DataTypes.INTEGER,
    checkout: DataTypes.INTEGER,
    guestId: DataTypes.INTEGER
  }, {});
  Booking.associate = function (models) {
    // associations can be defined here
    Booking.hasOne(models.Room, {
      foreignKey: 'id',
      sourceKey: 'roomId'
    });
    Booking.hasOne(models.Guest, {
      foreignKey: 'id',
      sourceKey: 'guestId'
    });
  };
  return Booking;
};