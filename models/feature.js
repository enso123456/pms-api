'use strict';
module.exports = (sequelize, DataTypes) => {
  const feature = sequelize.define('feature', {
    name: DataTypes.STRING
  }, {});
  feature.associate = function (models) {
    // associations can be defined here
    feature.belongsTo(models.RoomType, {
      foreignKey: 'id',
      sourceKey: 'featureId'
    });
  };
  return feature;
};