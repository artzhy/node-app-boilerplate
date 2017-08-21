const faker = require('faker')
const range = require('lodash/range')
const User = require('domain/models/user')

module.exports = (quantity, locale) => {
	faker.locale = locale || 'en'
	const schema = (i) => ({
		id: Number,
	  login: faker.internet.userName(),
	  email: faker.internet.email(),
	  password: 'password',
	  roles: ['role1', 'role2']
		created_at: new Date(),
	})

	return range(quantity)
		.map(i => new User(schema(i)))
}
