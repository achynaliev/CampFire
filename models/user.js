var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');

var schema = new Schema({
  firstName: {type: String, require: true},
  lastName: {type: String, require: true},
  email: {type: String, require: true, unique: true},
  phone: {type: String},
  imageUrl: {type: String},
  passwordDigest: {type: String, require: true},
  userBio: {type: String}
});

schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('User', schema);
