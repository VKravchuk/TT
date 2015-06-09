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
    User.find(function(err, users) {
        if (err){
            res.send(err);
        }

        res.json(users);
    });
};
// Create endpoint /api/auth for POST user authenticate
exports.authUser = function(req, res) {
    var username = req.body.username,
        password = req.body.password;
    User.findOne( { username: username } ,function(err, user) {
        if (err){
            return res.status(400).send(err);
        }

        // No user found with that username
        if (!user) {
            return res.status(422).send({message: 'No user found with that username'})
        }

        // Make sure the password is correct
        user.verifyPassword(password, function(err, isMatch) {
            if (err) { return res.status(400).send(err); }

            // Password did not match
            if (!isMatch) { return res.status(422).send({message: 'Password did not match'}); }

            // Success
            return  res.json({
                        user : user,
                        token : new Buffer(username + ':' +password).toString('base64')
                    });
        });


    });
};