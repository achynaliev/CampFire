var express = require("express");
var router = express.Router();

var User = require("../models/user");

router.get('/:searchQuery', function(req, res, next) {
  console.log(req)
  // if (req.searchQuery) {
  //   User.findOne({username: new RegExp('^'+searchQuery+'$', "i")}).then(user => {
  //     if (!user) {
  //       return res.status(401).json({message: 'No user found'});
  //     }
  //     return res.json({profile: User.profileJSON(user)});
  //   });
  // } else {
  //   return res.status(401).json({message: 'No user found'});
  // }
})

module.exports = router;
