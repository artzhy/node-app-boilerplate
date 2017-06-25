'use strict'
const AppError = require('core/AppError')

module.exports = function auth (req, res, next) {
  // if (req.isAuthenticated()) {
  //   return next()
  // }

  return next(new AppError({
    type: 'not_authenticated_error',
    httpCode: 403
  }))
}
