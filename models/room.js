'use strict';
module.exports = (sequelize, DataTypes) => {
  const room = sequelize.define('room', {
    name: DataTypes.STRING,
    available_qty: DataTypes.INTEGER,
    description: DataTypes.STRING,
    size: DataTypes.INTEGER,
    bed_qty: DataTypes.INTEGER,
    price: DataTypes.INTEGER
  }, {});
  room.associate = function (models) {
    // associations can be defined here
    room.hasOne(models.amentie, {
      foreignkey: 'ameneties_id',
      as: 'amenities'
    });
    room.hasOne(models.feature, {
      foreignkey: 'features_id',
      as: 'features'
    });
    room.hasOne(models.bed, {
      foreignkey: 'beds_id',
      as: 'beds'
    });
  };
  return room;
};