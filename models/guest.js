'use strict';
module.exports = (sequelize, DataTypes) => {
  const guest = sequelize.define('guest', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING,
    arrival: DataTypes.INTEGER
  }, {});
  guest.associate = function(models) {
    // associations can be defined here
  };
  return guest;
};