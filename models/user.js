var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');
var Room = require('./room');

var schema = new Schema({
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  username: {type: String, required: true, unique: true},
  email: {type: String, required: true, unique: true},
  phone: {type: String},
  imageUrl: {type: String},
  passwordDigest: {type: String, required: true},
  userBio: {type: String},
  rooms: [{type: Schema.Types.ObjectId, ref: 'Room'}]
});

schema.plugin(mongooseUniqueValidator);

schema.statics.profileJSON = function(user){
  return {
    firstName: user.firstName,
    lastName: user.lastName,
    username: user.username,
    email: user.email,
    phone: user.phone,
    imageUrl: user.imageUrl,
    userBio: user.userBio
  };
};

module.exports = mongoose.model('User', schema);
