var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');

var schema = new Schema({
  technology: {type: String, required: true}
});

schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('Category', schema);
