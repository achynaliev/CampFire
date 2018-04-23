var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require("mongoose-unique-validator");

var schema = new Schema({
  room: { type: String },
  message: { type: String },
  updated_at: { type: Date, default: Date.now }
});

schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model("Chat", schema);
