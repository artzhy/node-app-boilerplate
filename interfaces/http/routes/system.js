'use strict'
const { Router } = require('express')

module.exports = function ({ systemController }) {
  const router = Router()
  router.use((req, res) => res.json(systemController.showAction()))

  return router
}
