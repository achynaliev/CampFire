var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var Chat = require('../models/chat.js');

server.listen(4000);


io.on('connection', function(socket) {
  console.log('User Connected');
  socket.on('disconnect', function() {
    console.log('User Disconnected');
  });
  socket.on('save-message', function(data) {
    console.log(data);
    io.emit('new-message', { message: data });
  });
});

router.get('/', function(req, res, next) {
  // console.log(req.query.room);
  Chat.find({room: req.query.room}, function(err, chats) {
    if(err) return next(err);
    res.json(chats);
  });
});

// router.post('/', function(req, res, next) {
//   console.log("7777777777", req);
//   Chat.create(req.body, function(err, post) {
//     if(err) return next(err);
//     res.json(post);
//   });
// });

module.exports = router;
