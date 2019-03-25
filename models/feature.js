'use strict';
module.exports = (sequelize, DataTypes) => {
  const Feature = sequelize.define('Feature', {
    name: DataTypes.STRING
  }, {});
  Feature.associate = function (models) {
    // associations can be defined here
    Feature.belongsTo(models.RoomFeature, {
      foreignKey: 'id',
      targetKey: 'featureId'
    });
  };
  return Feature;
};