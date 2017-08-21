'use strict'
const bcrypt = require('bcryptjs')
const { attributes } = require('structure')

const User = attributes({
  id: Number,
  login: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
	status: { type: Number, default: 1 },
  roles: { type: Array, itemType: String, default: []},
	createdAt: { type: Date, default: () => new Date() }
})(class User {
  static encryptPassword (string) {
    return bcrypt.genSalt(10).then(salt => bcrypt.hash(string, salt))
  }
})

module.exports = User
