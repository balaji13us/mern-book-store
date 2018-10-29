var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var BookReview = require('../models/BookReview.js');
var passport = require('passport');
require('../config/passport')(passport);

/* GET ALL BOOKREVIEWS */
router.get('/', passport.authenticate('jwt', { session: false}), function(req, res) {
  var token = getToken(req.headers);
  if (token) {
    BookReview.find(function (err, books) {
      if (err) return next(err);
      res.json(books);
    });
  } else {
    return res.status(403).send({success: false, msg: 'Unauthorized.'});
  }
});

/* GET SINGLE BOOKREVIEW BY ID */
router.get('/:id', function(req, res, next) {
  BookReview.find({'book.id':req.params.id}, function (err, post) {
    if (err){ 
      console.log('test------------------' + JSON.stringify(err));
      return res.json(err);
    }
    res.json(post);
  });
});


getToken = function (headers) {
  if (headers && headers.authorization) {
    var parted = headers.authorization.split(' ');
    if (parted.length === 2) {
      return parted[1];
    } else {
      return null;
    }
  } else {
    return null;
  }
};

module.exports = router;
