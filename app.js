var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var mLabKeys = require('./configkeys/keys');
var chatRoutes = require('./routes/chat');
var appRoutes = require('./routes/app');
var userRoutes = require('./routes/user');
var roomRoutes = require('./routes/room');
var profileRoutes = require('./routes/profile');
var searchRoutes = require('./routes/search');
var projectRoutes = require('./routes/project');

var app = express();
mongoose.connect('mongodb://localhost:27017/firecamp');

// mongoose.Promise = global.Promise;
// mongoose.connect(mLabKeys.mongoURI, function(err) {
//  if (err){
//    console.error("Error!" + err);
//  }
// });

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(favicon(__dirname + '/public/images/favicon.ico'));


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
  next();
});

app.use('/project', projectRoutes);
app.use('/search', searchRoutes);
app.use('/room', roomRoutes);
app.use('/user', userRoutes);
app.use('/profiles', profileRoutes);
app.use('/chat', chatRoutes);
app.use('/', appRoutes);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  res.render('index');
});

module.exports = app;
