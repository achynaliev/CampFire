var express = require('express');
var router = express.Router();

var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

var User = require('../models/user');

router.param('username', function(req, res, next, username) {
  User.findOne({username: username}).then(function(user) {
    if (!user) { return res.sendStatus(404);}

    req.profile = user;

    return next();
  }).catch(next);
});

router.get('/:username', function(req, res, next) {
  if (req.profile) {
    // console.log(req.profile);
    // return res.json({profile: User.profileJSON(req.profile)});
    User.findOne({ username: req.profile.username}).then(user => {
      console.log(user);
      if (!user) {
        return res.json({profile: req.profile.profileJSON(false)});
      }
      return res.json({profile: User.profileJSON(user)});
    });
  } else {
    return res.json({profile: req.profile.profileJSON(false)});
  }
})

module.exports = router;
