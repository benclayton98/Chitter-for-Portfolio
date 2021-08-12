const { User } = require('../../models')
const bcrypt = require('bcryptjs')

const createTestUser = async () => {
  const hash = bcrypt.hashSync('test123')
  await User.create({
    email: 'test@test.com',
    passwordHash: hash,
    username: 'test',
    name: 'Test Subject'
  })
}

module.exports = createTestUser
