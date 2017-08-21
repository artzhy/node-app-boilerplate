const container = require('container')
const seeders = container.resolve('seeders')

seeders.user(10)
