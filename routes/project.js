var express = require("express");
var router = express.Router();

var bcrypt = require('bcryptjs');

var Project = require("../models/project");
var Category = require("../models/category");
var ObjectId = require('mongoose').Types.ObjectId;

router.param('id', function(req, res, next, id) {
  Project.find({_id: id}).then(function(project) {
    if(!project) { return res.sendStatus(404);}
    req.project = project;

    return next();
  }).catch(next);
});

router.get('/:id', function(req, res, next) {
  console.log(req.params);
  // console.log("------>>>>", req);

  if(req.params) {
    const projectId = req.params.id;
    console.log(projectId);
    Project.find({ _id: ObjectId(`${projectId}`)}).then(project => {
      if(!project) {
        return res.status(401).json({message: 'No project found'});
      }
      // console.log("----", req.project[0]);
      return res.json(project[0]);
      // return project;
    });
  } else {
    return res.status(401).json({message: 'No project found'});
  }
});

router.post('/', function (req, res, next) {
    // console.log(req.body);
    var project = new Project({
        title: req.body.title,
        ownerId: req.body.ownerId,
        username: req.body.username,
        fullDescription: req.body.fullDescription,
        shortDescription: req.body.shortDescription,
        imageUrl: req.body.imageUrl,
        categoryTitle: req.body.categoryTitle,
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


// router.put('/:id', function(req, res, next) {
//   Project.findOne({ _id: req.body.id }).then(project => {
//     if
//   })
// )})

// router.get('/:id', function(req, res, next) {
//   console.log(req.query.id);
//   Project.find({id: req.query.id}, function(err, project) {
//     if(err) return next(err);
//     res.json(project);
//   });
// });

// if (req) {
//   Project.findOne({ id: req.body}).then(project => {
//     if (!project) {
//       return res.status(401).json({message: 'That project no longer exits!'});
//     }
//     return res.json(Project.json(project));
//   });
// } else {
//   return res.status(401).json({message: 'No project found'});
// }

router.get('/', function(req, res, next) {
  Project.find()
    .exec(function(err, projects) {
      res.status(200).json({
        message: 'Success',
        obj: projects
      });
    });
});


module.exports = router;
