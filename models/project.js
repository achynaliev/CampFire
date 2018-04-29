var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');

var schema = new Schema({
  title: {type: String, required: true},
  ownerId: {type: String, required: true},
  createdDate: {type: Date, required: true},
  imageUrl: {type: String, required: true},
  fullDescription: {type: String}, required: true,
  shortDescription: {type: String, required: true},
  category: {type: Schema.Types.ObjectId, ref: 'Category'},
  done: {type: Boolean, required: true},
});

schema.plugin(mongooseUniqueValidator);
module.exports = mongoose.model('Project', schema);
