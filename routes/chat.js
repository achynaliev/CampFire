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


// Need to change from harcoded and can update chat room with this post

router.post('/', function(req, res, next) {
  Chat.updateOne()
      .exec(function (err, post) {
        res.status(200).json({
          obj: req.body
        });
      });
});

// router.post('/', function(req, res, next) {
//   Chat.create(req.body)
//   .exec(function (err, post) {
//     if (err) return next(err);
//     res.json(post);
//   });
// });


module.exports = router;
