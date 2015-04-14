module.exports = function(app, passport) {
  app.get('/', function(req, res, next) {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });

  app.get('/', function(req, res, next) {
    res.redirect('/');
  });

  app.post('/login', passport.authenticate('local-login', {
    successRedirect : '/profile',
    failureRedirect : '/login'
  });
  
  app.get('/signup', function(req, res) {

  });

  app.get('/profile', isLoggedIn, function(req, res) {

  });

  app.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
  });
}

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()){
    return next();
  }else{
    res.redirect('/');
  }
}
