'use strict'
const { Router } = require('express')
const { controllerAction } = require('../utils')

module.exports = function ({ systemController }) {
  return Router()
    .get('/show', controllerAction(systemController.showAction))
    .get('/error', controllerAction(systemController.errorAction))
}
