module.exports = function(app, passport) {
  app.get('/', function(req, res, next) {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });

  app.get('/', function(req, res, next) {
    res.redirect('/');
  });

  app.post('/login', function(req, res, next){
    passport.authenticate('local-login', function(err, user, info) {
      if(err){
        return next(err);
      }else if(!user){
        //res.msg('Incorrect User');
        return res.send(500);
      }else{
        req.login(user, function(err){
          if(err){
            return next(err);
          }else{
            console.log('good');
            return res.send('good');
          }
        });
      }
    })(req, res, next);
    //successRedirect : '/profile',
    //failureRedirect : '/login'
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
