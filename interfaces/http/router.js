'use strict'
const cors = require('cors')
const bodyParser = require('body-parser')
const compression = require('compression')
const { Router } = require('express')
const httpAuthMiddleware = require('./middlewares/auth')

module.exports = function ({ container, httpErrorMiddleware, systemRouter, AppError }) {
  const router = Router()
  const apiRouter = Router()

  apiRouter
    .use(cors())
    .use(bodyParser.json())
    .use(compression())
    .use(containerMiddleware(container))
    .use(httpAuthMiddleware)

  return router
    .use('/api/system', systemRouter)
    .use('/api/v1/', apiRouter)
    .use('/*', fallbackMiddleware(AppError))
    .use(httpErrorMiddleware)
}

function containerMiddleware (container) {
  return (req, res, next) => {
    req.container = container
    next()
  }
}

function fallbackMiddleware (AppError) {
  return (req, res, next) => next(
    new AppError({
      type: 'api_error',
      httpCode: 404,
      message: 'api not found error'
    })
  )
}
