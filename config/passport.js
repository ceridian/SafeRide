var LocalStrategy    = require('passport-local').Strategy;
var FacebookStrategy = require('passport-facebook').Strategy;

var models = require('../models');
var configAuth = require('./auth.js');

module.exports = function(passport){
  passport.serializeUser(function(user, done){
    console.log(user);
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done){
    console.log(id);
    models.USER.find({ where: { UUID: id}}).then(function(user){
      done(null, user);
    });
  });

  passport.use('local-login', new LocalStrategy({
    usernameField : 'email',
    passwordField : 'password',
    passReqToCallback : true
  }, function(req, email, password, done){
    console.log(email, password);
    done(email, null);
  }));
  // local signup
  passport.use('local-signup', new LocalStrategy({
    usernameField : 'email',
    passwordField : 'password',
    passReqToCallback : true
  }, function(req, email, password, done){
    //process.nextTick(function() {
      /*models.USER.find({ where: {email: email}}).then(function(user){
        if(user) {
          return done(null, false, req.flash('signupMessage', 'That email is already taken.'));
        } else {

        }
      })*/
    console.log(email, password);
    done(email, null);
  }));
  // facebook strat
  passport.use(new FacebookStrategy({
    clientID        : configAuth.facebookAuth.clientID,
    clientSecret    : configAuth.facebookAuth.clientSecret,
    callbackURL     : configAuth.facebookAuth.callbackURL
  }, function(token, refreshToken, profile, done){
    console.log(token, refreshToken, profile, done);
    done(profile, null);
  }));
}
