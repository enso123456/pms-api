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
    room.belongsTo(models.RoomType, {
      foreignKey: 'id',
      sourceKey: 'roomId'
    });
  };
  return room;
};