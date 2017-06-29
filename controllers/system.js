'use strict'

const MEGABYTE = 1024 * 1024

module.exports = ({ os, database, AppError }) => ({
  showAction: () => Promise.resolve({
    cpusNum: os.cpus().length,
    totalmem: (os.totalmem() / MEGABYTE),
    freemem: (os.freemem() / MEGABYTE),
    loadavg: os.loadavg(),
    uptime: os.uptime(),
  }),

  databaseAction: () => database.builder
    .raw('select * from information_schema.tables')
    .then(result => result.rows),

  errorAction: () => Promise.reject(
    new AppError({
      type: 'api_error',
      message: 'Action is not implemented. Please try again later.',
      httpCode: 404
    })
  )
})
