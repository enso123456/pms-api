'use strict';
module.exports = (sequelize, DataTypes) => {
  const Guest = sequelize.define('Guest', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    gender: DataTypes.STRING,
    contactNumber: DataTypes.INTEGER,
    email: DataTypes.STRING
  }, {});
  Guest.associate = function (models) {
    // associations can be defined here
    Guest.belongsTo(models.Booking, {
      foreignKey: 'id',
      targetKey: 'guestId'
    });
  };
  return Guest;
};