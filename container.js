'use strict'
const { createContainer, Lifetime, asValue, asFunction, asClass} = require('awilix')
const container = createContainer()

module.exports = container
container
  .register({
    os: asValue(require('os'))
  })

container
  .registerClass({
    app: [require('./core/Application'), { lifetime: Lifetime.SINGLETON }]
  })

container
  .register({
    AppError: asValue(require('./core/AppError')),
    configs: asValue(require('./configs')),
    database: asFunction(require('./infra/database')),
    logger: asClass(require('./infra/logger/adapter')).singleton(),
    container: asValue(container)
  })

container
  .register({
    systemController: asFunction(require('./controllers/system'))
  })

container
  .register({
    http: asFunction(require('./interfaces/http')),
    httpRouter: asFunction(require('./interfaces/http/router')),
    systemRouter: asFunction(require('./interfaces/http/routes/system')),
    httpErrorMiddleware: asFunction(require('./interfaces/http/middlewares/error'))
  })
