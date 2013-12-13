mongoose = require('mongoose');
config = require('../config');

console.log(config);

UserSchema = new mongoose.Schema({
	name: String,
	email: {type: String, lowercase: true }
	answers: {type: [String] }
	questions: [String]

});

exports.user = mongoose.model('User', UserSchema);


GlobalAnswerSchema = new mongoose.Schema({
	answers: {type: [String], user: String}
	answerFuture: String
	answerGoals: String
});
 


exports.GlobalAnswerSchema = mongoose.model('GlobalAnswer', GlobalAnswerSchema)

GlobalQuestionSchema = new mongoose.Schema({
	questions: [String]

});

exports.GlobalQuestionSchema = mongoose.model('GlobalQuestion', GlobalQuestionSchema)