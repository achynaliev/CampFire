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
