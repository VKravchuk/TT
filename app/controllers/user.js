// Load required packages
var User = require('../models/user');

// Create endpoint /api/users for POST
exports.postUsers = function(req, res) {
    var user = new User({
        username: req.body.username,
        password: req.body.password
    });

    user.save(function(err) {
        if (err){
            res.status(422).send(err);
        }
        else{
            res.json({ message: 'New beer drinker added to the locker room!' });
        }
    });
};

// Create endpoint /api/users for GET
exports.getUsers = function(req, res) {
    console.log(req.error);
    User.find(function(err, users) {
        if (err){
            res.send(err);
        }

        res.json(users);
    });
};