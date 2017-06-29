'use strict'
const jwt = require('jsonwebtoken')

module.exports = ({ configs, AppError }) => ({
  ensureAuth: (req, res, next) => {
    if (req.user) {
      return next()
    }

    return next(AppError.factory('api_access_error'))
  },

  verifyJwt: (req, res, next) => {
    const token = req.headers['x-access-token']

    if (!token) {
      return next(AppError.factory('api_access_error'))
    }

    jwt.verify(token, configs.JWT_SECRET, (error, decoded) => {
      if (error) {
        return next(new AppError({
          type: 'api_access_error',
          httpCode: 403,
          parent: error,
        }))
      }

      req.user = decoded
      req.decoded = decoded
      return next()
    })
  }
})
