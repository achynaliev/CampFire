var mongoose = require("mongoose");
var Schema = mongoose.Schema;
// var mongooseUniqueValidator = require("mongoose-unique-validator");

var chatSchema = new Schema({
  room: { type: String },
  username: {type: String},
  message: { type: String },
  updated_at: { type: Date, default: Date.now }
});


module.exports = mongoose.model("Chat", chatSchema);
