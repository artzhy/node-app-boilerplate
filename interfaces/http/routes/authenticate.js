'use strict'
const { Router } = require('express')
const { controllerAction } = require('../utils')

module.exports = function ({ authController, httpAuthMiddleware }) {
  return Router()
    .post('/', controllerAction(authController.auth))
    .get('/me',
         httpAuthMiddleware.verifyJwt,
         httpAuthMiddleware.ensureAuth, controllerAction(authController.me))
    .get('/logout',
         httpAuthMiddleware.verifyJwt,
         httpAuthMiddleware.ensureAuth, controllerAction(authController.logout))
}
