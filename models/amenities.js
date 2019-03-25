'use strict';
module.exports = (sequelize, DataTypes) => {
  const Amenities = sequelize.define('Amenities', {
    name: DataTypes.STRING
  }, {});
  Amenities.associate = function (models) {
    // associations can be defined here
    Amenities.belongsTo(models.RoomAmenities, {
      foreignKey: 'id',
      targetKey: 'amenitieId'
    });
  };
  return Amenities;
};