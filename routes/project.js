var express = require("express");
var router = express.Router();

var bcrypt = require('bcryptjs');

var Project = require("../models/project");
var Category = require("../models/category");
var ObjectId = require('mongoose').Types.ObjectId;

router.post('/', function (req, res, next) {
    console.log(req.body);
    var project = new Project({
        title: req.body.title,
        ownerId: req.body.ownerId,
        fullDescription: req.body.fullDescription,
        shortDescription: req.body.shortDescription,
        imageUrl: req.body.imageUrl,
        category: ObjectId(`${req.body.category}`),
        done: req.body.done
    });
    console.log(project);
    project.save(function(err, result) {
      if (err) {
        return res.status(500).json({
          title: 'An error occurred',
          error: err
        });
      }
      res.status(201).json({
        message: 'Successfully created',
        project: {title: project.title}
      });
    });
});

router.get('/', function(req, res, next) {
  Project.find({})
    .exec(function(err, projects) {
      res.status(200).json({
        message: 'Success',
        obj: projects
      });
    });
});



module.exports = router;
