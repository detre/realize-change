// Generated by CoffeeScript 1.6.3
(function() {
  var FacebookStrategy, GlobalAnswer, GlobalQuestion, GoogleStrategy, TwitterStrategy, answer_requests, api, app, config, ensureAuthenticated, express, http, mongoose, passport, path, routes, user;

  console.log = (global.process.env.NODE_ENV != null) && global.process.env.NODE_ENV === 'production' ? function() {} : console.log;

  express = require('express');

  routes = require('./routes');

  api = require('./routes/api');

  answer_requests = require('./routes/answer_requests');

  http = require('http');

  path = require('path');

  app = express();

  global.app = app;

  mongoose = require('mongoose');

  config = require('./config');

  user = require('./Models/User').user;

  GlobalAnswer = require('./Models/User').GlobalAnswerSchema;

  GlobalQuestion = require('./Models/User').GlobalQuestionSchema;

  passport = require('passport');

  FacebookStrategy = require('passport-facebook').Strategy;

  TwitterStrategy = require('passport-twitter').Strategy;

  GoogleStrategy = require('passport-google').Strategy;

  mongoose.connect(process.env.MONGOHQ_URL || config.mongoUrl);

  passport.serializeUser(function(user, done) {
    return done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {
    return user.findOne({
      _id: id
    }, function(err, user) {
      return done(err, user);
    });
  });

  passport.use(new GoogleStrategy({
    returnURL: config.google.returnURL,
    realm: config.google.realm
  }, function(identifier, profile, done) {
    console.log("YEAH", profile.emails[0].value);
    return process.nextTick(function() {
      var query;
      query = user.findOne({
        'email': profile.emails[0].value
      });
      return query.exec(function(err, oldUser) {
        var newUser;
        if (oldUser) {
          console.log("Found registered user: " + oldUser.name + " is logged in!");
          return done(null, oldUser);
        } else {
          newUser = new user();
          newUser.name = profile.displayName;
          newUser.email = profile.emails[0].value;
          console.log(newUser);
          return newUser.save(function(err) {
            if (err) {
              throw err;
            }
            console.log("New user, " + newUser.name + ", was created");
            return done(null, newUser);
          });
        }
      });
    });
  }));

  app.set('port', process.env.PORT || 1337);

  app.set('views', __dirname + './../views');

  app.set('view engine', 'jade');

  app.use(express.favicon());

  app.use(express.logger('dev'));

  app.use(express.cookieParser());

  app.use(express.bodyParser());

  app.use(express.session({
    secret: 'c00kies-@nd-cr3@M'
  }));

  app.use(passport.initialize());

  app.use(passport.session());

  app.use(express.methodOverride());

  app.use(app.router);

  app.use(express["static"](__dirname + './../public'));

  if ('development' === app.get('env')) {
    app.use(express.errorHandler());
  }

  config = require('./config.js');

  app.locals.config = config;

  app.locals.links = require('./navigation');

  app.get('/auth/google', passport.authenticate('google', {
    scope: 'email'
  }), function(req, res) {});

  app.get('/auth/google/callback', passport.authenticate('google', {
    failureRedirect: '/'
  }), function(req, res) {
    return res.redirect('/main');
  });

  ensureAuthenticated = function(req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    }
    return res.redirect('/error');
  };

  app.get('/', routes.index);

  app.get('/answers', routes.answers);

  app.get('/seeanswers', routes.seeanswers);

  app.get('/rank', routes.rank);

  app.get('/mission', routes.mission);

  app.get('/main', ensureAuthenticated, routes.main);

  app.get('/logout', function(req, res) {
    req.logOut();
    return res.redirect('/');
  });

  app.get('/error', function(req, res) {
    return res.send(401, '{err: please log in!}');
  });

  app.get('/sendquestion', function(req, res) {
    var newGlobalQuestion;
    console.log("parsedbody", req.query);
    newGlobalQuestion = new GlobalQuestion();
    newGlobalQuestion.questions = req.query.question;
    newGlobalQuestion.save(function(err) {
      if (err) {
        throw err;
      }
    });
    return res.send({
      success: "success"
    });
  });

  app.get('/sendanswer', answer_requests.sendanswer);

  app.get('/getanswers', answer_requests.getanswers);

  http.createServer(app).listen(app.get('port'), function() {
    return console.log('\nRealize Change is up and listening on port ' + app.get('port'));
  });

}).call(this);