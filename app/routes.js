var User = require('../app/models/user');

module.exports = function(app, passport) {
  
  app.get('/', function(req, res) {
      res.render('index.ejs'); // load the index.ejs file
  });

  // show the login form
  app.get('/login', function(req, res) {
      // render the page and pass in any flash data if it exists
      res.render('login.ejs', { message: req.flash('loginMessage') }); 
  });

  // process the login form
  app.post('/login', passport.authenticate('local-login', {
    successRedirect : '/admin', 
    failureRedirect : '/login', // redirect back to the signup page if there is an error
    failureFlash : true // allow flash messages
  }));

  
  app.get('/admin', isLoggedIn, function(req, res) {
    res.render('admin.ejs', {
      user : req.user // get the user out of session and pass to template
    });
  });

  app.post('/admin', isLoggedIn, (req, res) => {
    if(modifyPassword(req)){
      req.logout();
      res.redirect('/login');
    }
  })

  app.get('/logout', function(req, res) {
      req.logout();
      res.redirect('/');
  });
};
  
  // route middleware to make sure a user is logged in
  function isLoggedIn(req, res, next) {
    // if user is authenticated in the session, carry on 
    if (req.isAuthenticated())
        return next();
    // if they aren't redirect them to the home page
    res.redirect('/login');
  }

  async function modifyPassword(req) {
    let status = false;
    let user = req.user;
    
    user.local.password = user.generateHash(req.body.newPassword);

    await user.save(function(err){
      if (err) { 
        throw err;
      }
      else {
        status = true;
      }
    });
    return status;
  }