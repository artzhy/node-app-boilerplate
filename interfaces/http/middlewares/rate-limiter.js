'use strict'
const RateLimit = require('express-rate-limit')

module.exports = function ({ configs }) {
  return new RateLimit({
    windowMs: 25000,
    max: 5,
    delayAfter: 20,
    delayMs: 1500,
    headers: true,
    message: 'Too many requests',
  })
}
