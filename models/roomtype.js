'use strict';
module.exports = (sequelize, DataTypes) => {
  const RoomType = sequelize.define('RoomType', {
    roomId: DataTypes.INTEGER,
    featureId: DataTypes.INTEGER,
    amenitiesId: DataTypes.INTEGER,
    bedId: DataTypes.INTEGER
  }, {});
  RoomType.associate = function (models) {
    // associations can be defined here
    RoomType.hasMany(models.room, {
      foreignKey: 'id',
      sourceKey: 'roomId'
    });
    RoomType.hasMany(models.amenities, {
      foreignKey: 'id',
      sourceKey: 'amenitiesId'
    });
    RoomType.hasMany(models.feature, {
      foreignKey: 'id',
      sourceKey: 'featureId'
    });
    RoomType.hasOne(models.bed, {
      foreignKey: 'id',
      sourceKey: 'bedId'
    });
  };
  return RoomType;
};