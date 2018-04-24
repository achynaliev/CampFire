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
    User.findOne({ username: req.profile.username}).then(user => {
      if (!user) {
        return res.status(401).json({message: 'No user found'});
      }
      return res.json({profile: User.profileJSON(false)});
    });
  } else {
    return res.status(401).json({message: 'No user found'});
  }
})

module.exports = router;
