//TODO load models
var User = require('./models/user');

var passport = require('passport');

var userController = require('./controllers/user');
var authController = require('../config/auth');


// expose the routes to our app with module.exports
module.exports = function(app, express) {
// Create our Express router
    var router = express.Router();
    //TODO routes fix
    // Use the passport package in our application
    app.use(passport.initialize());
    // api ---------------------------------------------------------------------

    app.use('/api', router);
    // Create endpoint handlers for /users
    router.route('/users')
        .post(userController.postUsers)
        .get(authController.isAuthenticated, userController.getUsers);


    // application -------------------------------------------------------------
    app.get('', function(req, res) {
        res.sendFile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
    });

};
