'use strict'
const knex = require('knex')
const pg = require('pg')

if (process.env.PGSQL_SSL) {
  pg.defaults.ssl = true
}

module.exports = ({ logger, configs }) => ({
  builder: knex({
    client: 'pg',
    connection: configs.PGSQL_URI,
    pool: {
      min: configs.PGSQL_POOL_MIN,
      max: configs.PGSQL_POOL_MAX
    }
  })
})
