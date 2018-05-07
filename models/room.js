var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');
var User = require('./user');
var Category = require('./category');

var schema = new Schema({
  title: {type: String, required: true},
  category: {type: Schema.Types.ObjectId, ref: 'Category'},
  logoUrl: {type: String}
});

schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('Room', schema);

// db.rooms.insert({"title" : "AngularJS", "category" : ObjectId("5ade2c08a75b43e9e7bd0120"), "users" : [ ObjectId("5add46ca9d99b00ecff24bb4"), ObjectId("5add364986e0f80c7a70191f") ], logoUrl: "http://s3-us-west-1.amazonaws.com/appstarter-chyna/flex/angular-icon-1.svg"})
