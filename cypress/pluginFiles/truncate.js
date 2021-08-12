const { User } = require('../../models')

const truncateTables = () => {
  User.destroy({ truncate: true, cascade: true })
}

module.exports = truncateTables
