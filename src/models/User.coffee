mongoose = require('mongoose');
config = require('../config');

console.log(config);

UserSchema = new mongoose.Schema({
	name: String,
	email: {type: String, lowercase: true }
	answers: { 
		answerFuture: String
		answerGoals: String
	}
	optionsSeen: [
		{
			answerGoals: String
		}
	]
	location: String
	demographics: {
		country: String
		state: String
		city: String
		ethnicity: String
		age: Number
		gender: String
	}

});

module.exports = mongoose.model('User', UserSchema);

