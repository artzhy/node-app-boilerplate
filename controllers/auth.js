'use strict'
const jwt = require('jsonwebtoken')

module.exports = ({ logger, configs, database }) => ({
  auth: ({ request }) => {
    const user = {
      id: 1,
      name: request.body.name,
      email: request.body.email
    }
    const token = jwt.sign(user, configs.JWT_SECRET, { expiresIn: '1d' })

    return Promise.resolve({ token })
  },

  me: ({ request }) => Promise.resolve({
    user: request.user
  }),

  logout: ({ request }) => Promise.resolve({ response: 'logout' }),
})
