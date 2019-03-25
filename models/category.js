'use strict';
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    name: DataTypes.STRING
  }, {
      freezeTableName: true
    });
  Category.associate = function (models) {
    // associations can be defined here
    Category.belongsTo(models.RoomTypes, {
      foreignKey: 'id',
      targetKey: 'categoriesId'
    });
  };
  return Category;
};