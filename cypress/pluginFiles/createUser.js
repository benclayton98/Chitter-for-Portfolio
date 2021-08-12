const { User } = require('../../models')
const bcrypt = require('bcryptjs')

const createTestUser = async () => {
  const hash = bcrypt.hashSync('test123', 10);
  await User.create({
    email: 'test@test.com',
    passwordHash: hash
  })
}

module.exports = createTestUser