'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Chitter extends Model {

    static associate(models) {
      // define association here
    }
  };
  Chitter.init({
    username: DataTypes.STRING,
    chitter: DataTypes.STRING,
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Chitter',
  });
  return Chitter;
};