var LocalStrategy    = require('passport-local').Strategy;
var FacebookStrategy = require('passport-facebook').Strategy;

var models = require('../models');
var configAuth = require('./configAuth.js');

module.exports = function(passport){
  passport.serializeUser(function(user, done){
    console.log(user);
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done){
    models.USER.find({ where: { UUID: id}}).then(function(user){
      done(null, user);
    });
  });

  // local signup
  passport.use('local-signup', new LocalStrategy({
    usernameField : 'email',
    passwordField : 'password',
    passReqToCallback : true
  }, function(req, email, password, done){
    console.log(email, password);
  }
  // facebook strat
  passport.use(new FacebookStrategy({
    clientID        : configAuth.facebookAuth.clientID,
    clientSecret    : configAuth.facebookAuth.clientSecret,
    callbackURL     : configAuth.facebookAuth.callbackURL
  }, function(token, refreshToken, profile, done){
    console.log(token, refreshToken, profile, done);
  }));
}
