var express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var User = require('../models/user');
var Room = require('../models/room');

router.get('/room', function (req, res, next) {
    // console.log(req.query.search);
    Room.find({})
        .exec(function (err, rooms) {
          res.status(200).json({
              message: 'Success',
              obj: rooms
          });
        })
});

module.exports = router;
