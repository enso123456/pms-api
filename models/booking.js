'use strict';
module.exports = (sequelize, DataTypes) => {
  const booking = sequelize.define('booking', {
    checkin: DataTypes.INTEGER,
    checkout: DataTypes.INTEGER,
    notes: DataTypes.STRING,
    pax: DataTypes.INTEGER
  }, {});
  booking.associate = function (models) {
    // associations can be defined here
    booking.hasOne(models.room, {
      foreignkey: 'rooms_id',
      as: 'rooms'
    });
    booking.hasOne(models.guest, {
      foreignkey: 'guests_id',
      as: 'guests'
    });
  };
  return booking;
};