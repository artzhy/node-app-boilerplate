'use strict'
const debug = require('debug')

class Logger {
  constructor ({configs}) {
    this.configs = configs
    this.logger = debug('app')
  }

  trace () {
    return this.logger(...arguments)
  }

  log () {
    return this.logger(...arguments)
  }

  warn () {
    return this.logger(...arguments)
  }

  error () {
    return debug('app:error')(...arguments)
  }

}

module.exports = Logger
