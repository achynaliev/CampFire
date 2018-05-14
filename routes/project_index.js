var express = require("express");
var router = express.Router();

var bcrypt = require('bcryptjs');

var Project = require("../models/project");
var Category = require("../models/category");
var ObjectId = require('mongoose').Types.ObjectId;

router.param('categorytitle', function(req, res, next, id) {
  console.log("hi")
  Project.find({"categoryTitle": req.params.categoryTitle}).then(function(project) {
    if(!project) { return res.sendStatus(404);}
    req.project = project;

    return next();
  }).catch(next);
});

router.get('/categorytitle', function(req, res, next) {
  console.log(req.query.title)
  Project.find({"categoryTitle": req.query.title})
    .exec(function(err, projects) {
      res.status(200).json({
        message: 'Successfully find projects category',
        obj: projects
      });
    });
});

module.exports = router;
