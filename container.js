'use strict'
const util = require('util')
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
    // TODO: How to add a bulk controllers
    // systemController: asFunction(require('./controllers/system'))
  })

container
  .register({
    http: asFunction(require('./interfaces/http')),
    httpRouter: asFunction(require('./interfaces/http/router')),
    // TODO: How to add a bulk routes
    // systemRouter: asFunction(require('./interfaces/http/routes/system')),
    httpErrorMiddleware: asFunction(require('./interfaces/http/middlewares/error')),
    httpRateMiddleware: asFunction(require('./interfaces/http/middlewares/rate-limiter')),
    httpContainerMiddleware: asFunction(require('./interfaces/http/middlewares/container'))
  })

container.loadModules([ './controllers/*.js' ], {
  formatName: (match, module) => util.format('%sController', match)
})

container.loadModules([ './interfaces/http/routes/*.js' ], {
  formatName: (match, module) => util.format('%sRouter', match)
})

// container.loadModules([ './interfaces/http/middlewares/*.js' ], {
//   formatName: (match, module) => util
//     .format('http%sMiddleware', (match.charAt(0).toUpperCase() + match.substring(1)))
// })
