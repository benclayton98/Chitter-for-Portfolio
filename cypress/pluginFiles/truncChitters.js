const { Chitter } = require('../../models')

const truncateChitters = () => {
  Chitter.destroy({ truncate: true, cascade: true })
}

module.exports = truncateChitters
