'use strict';
module.exports = (sequelize, DataTypes) => {
  const RoomFeature = sequelize.define('RoomFeature', {
    roomId: DataTypes.INTEGER,
    featureId: DataTypes.INTEGER
  }, {});
  RoomFeature.associate = function (models) {
    // associations can be defined here
    RoomFeature.hasMany(models.Feature, {
      foreignKey: 'id',
      sourceKey: 'featureId'
    });
    RoomFeature.hasMany(models.Room, {
      foreignKey: 'id',
      sourceKey: 'roomId'
    })
  };
  return RoomFeature;
};