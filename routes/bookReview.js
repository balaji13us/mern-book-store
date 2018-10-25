var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var BookReview = require('../models/BookReview.js');
var passport = require('passport');
require('../config/passport')(passport);

/* GET ALL BOOKS */
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

/* GET SINGLE BOOK BY ID */
router.get('/:id', function(req, res, next) {
 const id1 = '44296bdc-3478-4c4b-b340-c368708a3f42';
 console.log('test------------------');
 //req.params.id
  BookReview.findById(id1, function (err, post) {
    if (err) return next(err);
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
