var express = require("express");
var router = express.Router();

var bcrypt = require('bcryptjs');

var User = require("../models/user");

router.post('/', function (req, res, next) {
    console.log(req.body)
    // var user = new User({
    //     firstName: req.body.firstName,
    //     lastName: req.body.lastName,
    //     username: req.body.username,
    //     passwordDigest: bcrypt.hashSync(req.body.passwordDigest, 10),
    //     email: req.body.email
    // });
    // user.save(function(err, result) {
    //     if (err) {
    //         return res.status(500).json({
    //             title: 'An error occurred',
    //             error: err
    //         });
    //     }
    //     var token = jwt.sign({user: user}, 'secret', {expiresIn: 7200});
    //     res.status(201).json({
    //       message: 'Successfully logged in',
    //       token: token,
    //       currentUser: {userId: user._id, 'firstName': user.firstName, lastName: user.lastName,
    //             username: user.username, email: user.email, imageUrl: user.imageUrl, userBio: user.userBio}
    //     });
    // });
});

module.exports = router;
