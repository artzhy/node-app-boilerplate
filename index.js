'use strict'

const container = require('./container')
const app = container.resolve('app')
const logger = container.resolve('logger')
const AppError = container.resolve('AppError')

process.on('SIGINT', () => {
  app
    .exit()
    .then(() => process.exit(0))
})

app
  .start()
  .catch(cause => {
    let error = cause
    if (!(cause instanceof AppError)) {
      error = new AppError(cause)
    }

    logger.error('Error: %O', error.toJSON())
    logger.error(error.getStack())
  })
