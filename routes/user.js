var express = require("express");
var router = express.Router();

var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

var User = require("../models/user");

router.post('/', function (req, res, next) {
    var user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        username: req.body.username,
        passwordDigest: bcrypt.hashSync(req.body.passwordDigest, 10),
        email: req.body.email
    });
    user.save(function(err, result) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        var token = jwt.sign({user: user}, 'secret', {expiresIn: 7200});
        res.status(201).json({
          message: 'Successfully logged in',
          token: token,
          currentUser: {userId: user._id, 'firstName': user.firstName, lastName: user.lastName,
                email: user.email, imageUrl: user.imageUrl, userBio: user.userBio}
        });
    });
});

router.post('/signin', function(req, res, next) {
    User.findOne({email: req.body.email}, function(err, user) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        if (!user) {
            return res.status(401).json({
                title: 'Login failed',
                error: {message: 'Invalid login credentials'}
            });
        }
        if (!bcrypt.compareSync(req.body.passwordDigest, user.passwordDigest)) {
            return res.status(401).json({
                title: 'Login failed',
                error: {message: 'Invalid login credentials'}
            });
        }
        var token = jwt.sign({user: user}, 'secret', {expiresIn: 7200});
        res.status(200).json({
            message: 'Successfully logged in',
            token: token,
            currentUser: {userId: user._id, firstName: user.firstName, lastName: user.lastName,
                  email: user.email, imageUrl: user.imageUrl, userBio: user.userBio}
        });
    });
});

module.exports = router;
