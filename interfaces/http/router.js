'use strict'
const cors = require('cors')
const helmet = require('helmet')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const compression = require('compression')
const morgan = require('morgan')
const { Router } = require('express')
const httpAuthMiddleware = require('./middlewares/auth')

module.exports = function ({ configs, httpContainerMiddleware, httpErrorMiddleware,
  httpRateMiddleware, systemRouter, AppError }) {

  const router = Router()
  const apiRouter = Router()

  apiRouter
    .use(httpRateMiddleware)
    .use(cors())
    .use(bodyParser.json())
    .use(cookieParser())
    .use(compression())
    .use(helmet.noCache())
    .use(morgan('dev'))
    .use(httpContainerMiddleware)
    .use(httpAuthMiddleware)

  return router
    .use('/api/system', systemRouter)
    .use('/api/v1', apiRouter)
    .use('*', (req, res, next) => next(AppError.factory('api_error')))
    .use(httpErrorMiddleware)

}
