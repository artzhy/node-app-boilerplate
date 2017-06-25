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
    return this.stack
  }

  toJSON () {
    return {
      type: this.type,
      params: JSON.stringify(this.params),
      message: this.message,
      httpCode: this.httpCode
    }
  }
}

module.exports = AppError
