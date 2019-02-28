'use strict';
module.exports = (sequelize, DataTypes) => {
  const amentie = sequelize.define('amenities', {
    name: DataTypes.STRING
  }, {});
  amentie.associate = function (models) {
    // associations can be defined here
    amentie.belongsTo(models.RoomType, {
      foreignKey: 'id',
      sourceKey: 'amenitiesId'
    })
  };
  return amentie;
};