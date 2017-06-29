'use strict'
const cors = require('cors')
const morgan = require('morgan')
const helmet = require('helmet')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const compression = require('compression')
const { Router } = require('express')

module.exports = function ({ configs, httpContainerMiddleware, httpErrorMiddleware,
  httpRateMiddleware, httpAuthMiddleware, systemRouter, authenticateRouter, AppError }) {

  const router = Router()
  const apiRouter = Router()

  apiRouter
    .use(morgan(':date[iso] :remote-addr :method :url :status :response-time'))
    .use(httpRateMiddleware)
    .use(cors())
    .use(bodyParser.json())
    .use(cookieParser())
    .use(compression())
    .use(helmet.noCache())
    .use(httpContainerMiddleware)

  apiRouter
    .use('/system', systemRouter)
    .use('/auth', authenticateRouter)

  return router
    .use('/api', apiRouter)
    .use('*', (req, res, next) => next(AppError.factory('api_error')))
    .use(httpErrorMiddleware)

}
