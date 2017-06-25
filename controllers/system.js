'use strict'

const MEGABYTE = 1024 * 1024

module.exports = ({ os }) => ({
  showAction: () => ({
    cpusNum: os.cpus().length,
    totalmem: (os.totalmem() / MEGABYTE),
    freemem: (os.freemem() / MEGABYTE),
    loadavg: os.loadavg(),
    uptime: os.uptime(),
  })
})
