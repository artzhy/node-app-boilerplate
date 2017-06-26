'use strict'

class AppError extends Error {
  constructor ({ type, httpCode, message, params }) {
    super()
    this.type = type || 'application_error'
    this.params = params || {}
    this.message = message || 'Application Error'
    this.httpCode = httpCode || 500
  }

  getStack () {
    return this.stack.split('\n')
  }

  toJSON () {
    return {
      type: this.type,
      params: this.params,
      message: this.message,
      httpCode: this.httpCode
    }
  }

  static factory (type) {
    let error
    switch (type) {
      case 'api_error':
      default: error = {
        httpCode: 404,
        message: 'Api Not Found Error',
        type,
      }
    }

    return new AppError(error)
  }
}

module.exports = AppError
