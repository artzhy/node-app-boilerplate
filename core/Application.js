'use strict'
class Application {
  constructor ({ logger, database, http}) {
    this.logger = logger
    this.http = http
  }

  start () {
    this.logger.trace('Application Start.')
    return this.http.start()
  }

  exit () {
    this.logger.trace('Application Exit.')
    return Promise.resolve()
  }
}

module.exports = Application
