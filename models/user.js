'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.Chitters = this.hasMany(models.Chitter, {onDelete: 'cascade'})
    }
  };
  User.init({
    email: DataTypes.STRING,
    passwordHash: DataTypes.STRING,
    username:DataTypes.STRING,
    name: DataTypes.STRING
  },
   {
    sequelize,
    modelName: 'User',
    freezeTableName: true
  });
  return User;
};