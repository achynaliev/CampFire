var express = require('express');
var router = express.Router();

var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

var User = require('../models/user');

router.get('/:username', function(req, res, next) {
  if (req.body) {
    User.findById(req.body.id).then(user => {
      if (!user) {
        return res.json({profile: req.profile.profileJSON(false)});
      }

      return res.json({profile: req.profile.profileJSON(user)});
    });
  } else {
    return res.json({profile: req.profile.profileJSON(false)});
  }
})
