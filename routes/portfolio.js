var Project = require("../models/project");
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  console.log(req.query.username);
  Project.find({username: req.query.username})
    .exec(function(err, projects) {
      res.status(200).json({
        message: 'Success',
        obj: projects
      });
    });
});

module.exports = router;
