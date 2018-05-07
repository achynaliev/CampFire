var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');
var Category = require('./category');

var projectSchema = new Schema({
  title: {type: String, required: true},
  ownerId: {type: Schema.Types.ObjectId, ref: 'User'},
  username: {type: String, required: true},
  createdDate: {type: Date, default: Date.now},
  imageUrl: {type: String, required: true},
  fullDescription: {type: String, required: true},
  shortDescription: {type: String, required: true},
  categoryTitle: {type: String, required: true},
  done: {type: Boolean, required: true}
});

projectSchema.statics.profileJSON = function(project){
  return {
    title: project.title,
    ownerId: project.ownerId,
    username: project.username,
    createdDate: project.createdDate || new Date,
    imageUrl: project.imageUrl || "http://cdn.pixabay.com/photo/2018/03/01/09/33/laptop-3190194_1280.jpg",
    fullDescription: project.fullDescription,
    shortDescription: project.shortDescription,
    categoryTitle: project.categoryTitle,
    done: project.done || false,
    projectId: project._id
  };
};

module.exports = mongoose.model('Project', projectSchema);
