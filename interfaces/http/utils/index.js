'use strict'

module.exports.controllerAction = function (action) {
  return (req, res, next) => action()
    .then(response => res.json(response))
    .catch(cause => next(cause))
}
