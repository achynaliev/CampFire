var express = require('express');
var router = express.Router();

var Chat =  require('../models/chat');


router.get('/', function(req, res, next) {
  // console.log(req.query.room);
  Chat.find({room: req.query.room}, function(err, chats) {
    if(err) return next(err);
    res.json(chats);
  });
});

router.post('/', function(req, res, next) {
  Chat.updateOne()
      .exec(function (err, rooms) {
        res.status(200).json({
            message: 'Success',
            obj: "hi"
        });
      })
});

module.exports = router;
