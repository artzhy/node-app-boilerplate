'use strict'

class AppError extends Error {
  constructor ({ type, httpCode, message, params, parent }) {
    super()
    this.type = type || 'application_error'
    this.params = params || {}
    this.message = message || 'Application Error'
    this.httpCode = httpCode || 500
    this.parent = parent || {}
  }

  getStack () {
    return (this.parent.stack || this.stack).split('\n')
  }

  toJSON () {
    return {
      type: this.type,
      params: this.params,
      message: this.parent.message || this.message,
      httpCode: this.httpCode,
    }
  }

  static factory (type, parent) {
    switch (type) {
      case 'api_error':
        return new AppError({
          message: 'Api Not Found Error',
          httpCode: 404,
          parent,
          type
        })

      case 'api_access_error':
        return new AppError({
          message: 'Authentication error, access denied.',
          httpCode: 403,
          parent,
          type
        })

      case 'api_request_limit_error':
        return new AppError({
          message: 'Requests limit error. Please try again later.',
          httpCode: 426,
          parent,
          type
        })

      default:
        return new AppError()
    }
  }
}

module.exports = AppError
