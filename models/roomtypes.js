'use strict';
module.exports = (sequelize, DataTypes) => {
  const RoomTypes = sequelize.define('RoomTypes', {
    roomId: DataTypes.INTEGER,
    categoriesId: {
      unique: true,
      type: DataTypes.INTEGER
    }
  }, {});
  RoomTypes.associate = function (models) {
    // associations can be defined here
    RoomTypes.hasMany(models.Category, {
      foreignKey: 'id',
      sourceKey: 'categoriesId'
    });
    RoomTypes.hasMany(models.Room, {
      foreignKey: 'id',
      sourceKey: 'roomId'
    });
  };
  return RoomTypes;
};