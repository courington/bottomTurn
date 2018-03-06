'use strict';
module.exports = (sequelize, DataTypes) => {
  var bt_user = sequelize.define('bt_user', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING
  }, {});
  bt_user.associate = function(models) {
    // associations can be defined here
  };
  return bt_user;
};