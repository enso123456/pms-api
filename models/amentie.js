'use strict';
module.exports = (sequelize, DataTypes) => {
  const amentie = sequelize.define('amentie', {
    name: DataTypes.STRING
  }, {});
  amentie.associate = function(models) {
    // associations can be defined here
  };
  return amentie;
};