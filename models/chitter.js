'use strict'
const {
  Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Chitter extends Model {
    static associate (models) {
      this.User = this.belongsTo(models.User)
    }
  };
  Chitter.init({
    chitter: DataTypes.STRING,
    UserId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Chitter',
    freezeTableName: true
  })
  return Chitter
}
