var mongoose = require('mongoose');

var users = mongoose.model('users', {
	email: {
		required: true,
		trim: true,
		type: String,
		minlength: 1
	}
});

module.exports = {users};