'use strict'

module.exports = function errorHandler ({ logger, AppError }) {
  return (error, req, res, next) => {
    let appError = error

    if (!(appError instanceof AppError)) {
      appError = new AppError(appError)
    }

    const json = appError.toJSON()
    logger.error(json)

    if (process.env.NODE_ENV === 'dev') {
      json.stack = appError.getStack()
    }

    return res
      .status(appError.httpCode)
      .json(json)
  }
}
