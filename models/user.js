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
  rooms: [{type: Schema.Types.ObjectId, ref: 'Room'}],
  profileBackgroundImage: {type: String},
  location: {type: String},
  bootcamp: {type: String},
  graduation: {type: String},
  stack: {type: String},
  githubLink: {type: String},
  linkedInLink: {type: String}
});

schema.plugin(mongooseUniqueValidator);

schema.statics.profileJSON = function(user){
  return {
    bootcamp: user.bootcamp,
    firstName: user.firstName,
    lastName: user.lastName,
    username: user.username,
    email: user.email,
    phone: user.phone,
    imageUrl: user.imageUrl || "https://res.cloudinary.com/dh5e4xxbr/image/upload/v1523489168/tatt8hvxlk0qlq7by6cy.jpg",
    userBio: user.userBio,
    profileBackgroundImage: user.profileBackgroundImage || "https://res.cloudinary.com/dh5e4xxbr/image/upload/v1523473556/odgujdbfgx8xhrz2ppgg.jpg",
    location: user.location,
    graduation: user.graduation,
    stack: user.stack,
    githubLink: user.githubLink,
    linkedInLink: user.linkedInLink
  };
};

module.exports = mongoose.model('User', schema);
