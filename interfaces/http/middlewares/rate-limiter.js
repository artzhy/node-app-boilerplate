'use strict'
const RateLimit = require('express-rate-limit')

module.exports = function ({ configs, AppError }) {
  return new RateLimit({
    windowMs: 25000,
    max: 5,
    delayAfter: 20,
    delayMs: 1500,
    headers: true,
    handler: (req, res, next) => next(
      AppError.factory('api_request_limit_error')
    )
  })
}
