source = $("#rank-template").html();
dataTemplate = Handlebars.compile(source);


addAnswersToRank = (data) ->

	$.get '/getanswers', data, (answers) ->
		console.log("answeranswer:",answers)
		console.log("data.future",data.future, "data.goals",data.goals)
		$('#choicesRepo').html(dataTemplate(answers))
$ ->

	addAnswersToRank({randomize: false, future: false, goals: true})
	