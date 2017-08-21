const { format } = require('util')
const userGenerator = require('seeds/generators/user')
const userMapper = require('../mappers/user')

module.exports = ({ database, logger }) => ({
	user: count => {
		const users = userGenerator(count)
			.map(user => userMapper.toDatabase(user))

		return database
		 	.builder('users')
			.insert(users)
			.then(() => logger.log(
				format('Seed %d users', count)
			))
	}
})
