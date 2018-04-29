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

// ujwal
// ObjectId("5ae1129f3f6c8c7870f3678b")
// hello
// ObjectId("5ae3888f4c68e708b18d7d66")
// pix
// ObjectId("5ae38c4dc3ed970de2c8e3d5")
//
// node.js
// ObjectId("5adf75f618eb3b1ea54c3667")
//
// JavaScript
// ObjectId("5ae52d689244f074e040741d")
//
// img
// "https://static1.squarespace.com/static/56a1a9ccab2810f339a5235b/t/56aeccee20c6474b886903e9/1454296490612/Project.jpeg"
// {
//   title: "One Node Project",
//   ownerId: ObjectId("5ae1129f3f6c8c7870f3678b"),
//   imageUrl: "https://static1.squarespace.com/static/56a1a9ccab2810f339a5235b/t/56aeccee20c6474b886903e9/1454296490612/Project.jpeg",
//   fullDescription: "Is at purse tried jokes china ready decay an. Small its shy way had woody downs power. To denoting admitted speaking learning my exercise so in. Procured shutters mr it feelings. To or three offer house begin taken am at. As dissuade cheerful overcame so of friendly he indulged unpacked. Alteration connection to so as collecting me. Difficult in delivered extensive at direction allowance. Alteration put use diminution can considered sentiments interested discretion. An seeing feebly stairs am branch income me unable. ",
//   shortDescription: "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
//   category: ObjectId("5adf75f618eb3b1ea54c3667"),
//   done: false
// }
// {
//   title: "Two Node Project",
//   ownerId: ObjectId("5ae1129f3f6c8c7870f3678b"),
//   imageUrl: "https://newsignature.com/wp-content/uploads/2017/02/project-management-1024x512.png",
//   fullDescription: "Is at purse tried jokes china ready decay an. Small its shy way had woody downs power. To denoting admitted speaking learning my exercise so in. Procured shutters mr it feelings. To or three offer house begin taken am at. As dissuade cheerful overcame so of friendly he indulged unpacked. Alteration connection to so as collecting me. Difficult in delivered extensive at direction allowance. Alteration put use diminution can considered sentiments interested discretion. An seeing feebly stairs am branch income me unable. ",
//   shortDescription: "The will to win, the desire to succeed, the urge to reach your full potential... these are the keys that will unlock the door to personal excellence.",
//   category: ObjectId("5adf75f618eb3b1ea54c3667"),
//   done: false
// }
// {
//   title: "Three Node Project",
//   ownerId: ObjectId("5ae3888f4c68e708b18d7d66"),
//   imageUrl: "https://www.simplilearn.com/ice9/free_resources_article_thumb/Project-Scope-Management-Cover.jpg",
//   fullDescription: "Is at purse tried jokes china ready decay an. Small its shy way had woody downs power. To denoting admitted speaking learning my exercise so in. Procured shutters mr it feelings. To or three offer house begin taken am at. As dissuade cheerful overcame so of friendly he indulged unpacked. Alteration connection to so as collecting me. Difficult in delivered extensive at direction allowance. Alteration put use diminution can considered sentiments interested discretion. An seeing feebly stairs am branch income me unable. ",
//   shortDescription: "It does not matter how slowly you go as long as you do not stop.",
//   category: ObjectId("5adf75f618eb3b1ea54c3667"),
//   done: false
// }
// {
//   title: "One JavaScript Project",
//   ownerId: ObjectId("5ae3888f4c68e708b18d7d66"),
//   imageUrl: "https://cdn.lynda.com/course/506926/506926-636238695730179167-16x9.jpg",
//   fullDescription: "Is at purse tried jokes china ready decay an. Small its shy way had woody downs power. To denoting admitted speaking learning my exercise so in. Procured shutters mr it feelings. To or three offer house begin taken am at. As dissuade cheerful overcame so of friendly he indulged unpacked. Alteration connection to so as collecting me. Difficult in delivered extensive at direction allowance. Alteration put use diminution can considered sentiments interested discretion. An seeing feebly stairs am branch income me unable. ",
//   shortDescription: "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
//   category: ObjectId("5adf75f618eb3b1ea54c3667"),
//   done: false
// }
// {
//   title: "Two JavaScript Project",
//   ownerId: ObjectId("5ae38c4dc3ed970de2c8e3d5"),
//   imageUrl: "http://www.hrinasia.com/wp-content/uploads/2016/01/project-management-6.jpg",
//   fullDescription: "Is at purse tried jokes china ready decay an. Small its shy way had woody downs power. To denoting admitted speaking learning my exercise so in. Procured shutters mr it feelings. To or three offer house begin taken am at. As dissuade cheerful overcame so of friendly he indulged unpacked. Alteration connection to so as collecting me. Difficult in delivered extensive at direction allowance. Alteration put use diminution can considered sentiments interested discretion. An seeing feebly stairs am branch income me unable. ",
//   shortDescription: "The will to win, the desire to succeed, the urge to reach your full potential... these are the keys that will unlock the door to personal excellence.",
//   category: ObjectId("5adf75f618eb3b1ea54c3667"),
//   done: false
// }
// {
//   title: "Three JavaScript Project",
//   ownerId: ObjectId("5ae38c4dc3ed970de2c8e3d5"),
//   imageUrl: "https://tr4.cbsistatic.com/hub/i/r/2017/02/01/aebb34ab-f843-4e44-a39a-a083da99fcef/resize/770x/cb52e22968e0e566fa93d7d3403d95cc/istock-518310332.jpg",
//   fullDescription: "Is at purse tried jokes china ready decay an. Small its shy way had woody downs power. To denoting admitted speaking learning my exercise so in. Procured shutters mr it feelings. To or three offer house begin taken am at. As dissuade cheerful overcame so of friendly he indulged unpacked. Alteration connection to so as collecting me. Difficult in delivered extensive at direction allowance. Alteration put use diminution can considered sentiments interested discretion. An seeing feebly stairs am branch income me unable. ",
//   shortDescription: "It does not matter how slowly you go as long as you do not stop.",
//   category: ObjectId("5adf75f618eb3b1ea54c3667"),
//   done: false
// }
