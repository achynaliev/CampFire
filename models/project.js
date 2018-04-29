var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');
var Category = require('./category');

var projectSchema = new Schema({
  title: {type: String, required: true},
  ownerId: {type: Schema.Types.ObjectId, ref: 'User'},
  ownerUsername: {type: String, required: true},
  createdDate: {type: Date, default: Date.now},
  imageUrl: {type: String, required: true},
  fullDescription: {type: String, required: true},
  shortDescription: {type: String, required: true},
  category: {type: Schema.Types.ObjectId, ref: 'Category'},
  done: {type: Boolean, required: true}
});

module.exports = mongoose.model('Project', projectSchema);
