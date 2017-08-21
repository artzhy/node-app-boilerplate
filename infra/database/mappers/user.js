const User = require('domain/models/user')

module.exports.toDatabase = userModel => ({
	id: userModel.id,
	login: userModel.login,
	email: userModel.email,
	password: userModel.password,
	status: userModel.status,
	roles: userModel.roles,
	created_at: userModel.createdAt,
})

module.exports.toModel = data => {
	data.createdAt = data.created_at
	return new User(data)
}
