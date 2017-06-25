'use strict'
const express = require('express')

module.exports = ({ logger, configs, httpRouter }) => ({
  start: () => {
    const server = express()
    server.use(httpRouter)
    server.disable('x-powered-by')

    return new Promise(resolve => {
      const http = server.listen(configs.NODE_PORT, () => {
        logger.log('http server listening on %d', http.address().port)
        resolve(server)
      })
    })
  }
})
