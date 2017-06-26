'use strict'
const { attributes } = require('structure')

const User = attributes({
  id: Number,
  login: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  roles: { type: Array, itemType: String, default: []}
})(class User {
  setPassword (password) {
    return '$bcrypted'
  }
})

User.MIN_LEGAL_AGE = 21

module.exports = User
