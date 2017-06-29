'use strict'
const { Router } = require('express')
const { controllerAction } = require('../utils')

module.exports = function ({ systemController }) {
  return Router()
    .get('/', controllerAction(systemController.showAction))
    .get('/database', controllerAction(systemController.databaseAction))
    .get('/error', controllerAction(systemController.errorAction))
}
