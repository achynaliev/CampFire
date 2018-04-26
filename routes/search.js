var express = require("express");
var router = express.Router();

var User = require("../models/user");

router.get('/', function (req, res, next) {
    let searchQuery = req.query.query;
    User.find({username: new RegExp(searchQuery, 'i')}).then(user => {
        if (!user) {
          return res.status(401).json({message: 'No user found'});
        }
        return res.status(200).json({
          message: "Success",
          obj: user
        })
      });
});

module.exports = router;
