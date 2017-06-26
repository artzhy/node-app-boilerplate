'use strict'

module.exports = function ({ container }) {
  return (req, res, next) => {
    req.conteiner = container
    return next()
  }
}
