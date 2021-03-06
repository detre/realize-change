# renderObj = { title: app.locals.config.title, subtitle: app.locals.config.subtitle, 200}

exports.index = (req, res) ->
	res.render('index', { title: app.locals.config.title, subtitle: app.locals.config.subtitle});


exports.main = (req, res) ->
	# renderObj.username = req.user.name
	res.render('index', { title: app.locals.config.title, subtitle: app.locals.config.subtitle, username: req.user.name, 200});
	# res.send({login: "success", username: req.user.name}, 200);
	# res.redirect('/')

# exports.partials = (req, res) ->
# 	# console.log("req params",req.params)
# 	renderObj = {}
# 	renderObj.title = app.locals.config.title
# 	renderObj.subtitle =  app.locals.config.subtitle
# 	renderObj.username = req.user.name
# 	renderObj.routeName = req.params.name;

# 	# console.log(name)
# 	res.render("partials/#{req.params.name}", renderObj);
exports.answers = (req, res) ->

	renderObj = {}
	renderObj.title = app.locals.config.title
	renderObj.subtitle =  app.locals.config.subtitle
	renderObj.apikey = 'AIzaSyB_e3Hr9YXDi4P4JLX53yZOIr1Osz7L-_U'

	# conditional fixes login 'property name of undefined' error. not permanent
	if req.user is undefined
		res.render("partials/answers", renderObj);
	else
		renderObj.username = req.user.name
		res.render("partials/answers", renderObj);

exports.seeanswers = (req, res) ->
	renderObj = {}
	renderObj.title = app.locals.config.title
	renderObj.subtitle =  app.locals.config.subtitle
	
	# conditional fixes login 'property name of undefined' error. not permanent
	if req.user is undefined
		res.render("partials/seeanswers", renderObj);
	else
		renderObj.username = req.user.name
		res.render("partials/seeanswers", renderObj);
exports.rank = (req, res) ->
	console.log "hey"
	renderObj = {}
	renderObj.title = app.locals.config.title
	renderObj.subtitle =  app.locals.config.subtitle
	
	# conditional fixes login 'property name of undefined' error. not permanent
	if req.user is undefined
		res.render("partials/rank", renderObj);
	else
		renderObj.username = req.user.name
		res.render("partials/rank", renderObj);

exports.results = (req, res) ->
	console.log "hey"
	renderObj = {}
	renderObj.title = app.locals.config.title
	renderObj.subtitle =  app.locals.config.subtitle
	
	# conditional fixes login 'property name of undefined' error. not permanent
	if req.user is undefined
		res.render("partials/results", renderObj);
	else
		renderObj.username = req.user.name
		res.render("partials/results", renderObj);

exports.mission = (req,res) ->
	console.log("reached mission")
	res.render('partials/mission', { title: app.locals.config.title, subtitle: app.locals.config.subtitle})

