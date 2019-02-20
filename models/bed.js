'use strict';
module.exports = (sequelize, DataTypes) => {
  const bed = sequelize.define('bed', {
    name: DataTypes.STRING
  }, {});
  bed.associate = function(models) {
    // associations can be defined here
  };
  return bed;
};