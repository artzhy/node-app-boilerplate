'use strict'
const { expect } = require('chai')
const systemController = require('./system')

describe('systemController', () => {
  const { errorAction, showAction } = systemController({
    AppError: Error,
    os: {
      cpus: () => [1],
      totalmem: () => 25 * 1024 * 1024,
      freemem: () => 5 * 1024 * 1024,
      loadavg: () => [1, 5, 15],
      uptime: () => 7200
    }
  })

  it('errorAction should throw an error', next => {
    errorAction()
      .catch(e => {
        next()
      })
  })

  it('showAction should', next => {
    showAction()
      .then(response => {
        expect(response.cpusNum).to.equal(1)
        expect(response.totalmem).to.equal(25)
        expect(response.freemem).to.equal(5)
        expect(response.loadavg).to.deep.equal([1, 5, 15])
        expect(response.uptime).to.equal(7200)
        next()
      })
  })
})
