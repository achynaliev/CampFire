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
      return res.json(User.profileJSON(user));
    });
  } else {
    return res.status(401).json({message: 'No user found'});
  }
});

router.put('/:username', function(req, res, next) {
  User.findOne({ username: req.body.username}).then(user => {
    if(!user){ return res.sendStatus(401); }

    if (typeof req.body.imageUrl !== '') {
      user.imageUrl = req.body.imageUrl;
    }
    if (typeof req.body.bootcamp !== '') {
      user.bootcamp = req.body.bootcamp;
    }
    if (typeof req.body.userBio !== '') {
      user.userBio = req.body.userBio;
    }
    if (typeof req.body.location !== '') {
      user.location = req.body.location;
    }
    if (typeof req.body.graduation !== '') {
      user.graduation = req.body.graduation;
    }
    if (typeof req.body.stack !== '') {
      user.stack = req.body.stack;
    }
    if (typeof req.body.githubLink !== '') {
      user.githubLink = req.body.githubLink;
    }
    if (typeof req.body.linkedInLink !== '') {
      user.linkedInLink = req.body.linkedInLink;
    }

    return user.save().then(user => {
      return res.json(User.profileJSON(user));
    })
  });
})

module.exports = router;
