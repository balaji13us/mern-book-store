var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');

var book = require('./routes/book');
var auth = require('./routes/auth');
var bookReview = require('./routes/bookReview');
var app = express();

var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
var mongodbdefaulthosturl='mongodb://localhost:27017/mern-crud';

//var mongodblocalhosturl='mongodb://192.168.99.100:32768/mern-crud';
// configure correct mongodb url in  environment variable
// mongodburl=mongodb://localhost:27017/mern-crud
// if not confgured mongodbdefaulthosturl value will be used

var mongodburl = process.env.mongodburl!=null?process.env.mongodburl:mongodbdefaulthosturl ;
console.log('process.env.mongodburl : ' + process.env.mongodburl);
console.log('mongodburl : ' + mongodburl);

mongoose.connect(mongodburl
              , {useNewUrlParser: true, promiseLibrary: require('bluebird') })
  .then(() =>  console.log('connection succesful'))
  .catch((err) => {
    console.error('verify mongodburl');
    console.log(' configure correct mongodb url in  environment variable ' 
    + ' mongodburl=mongodb://localhost:27017/mern-crud ' 
    + ' if not confgured mongodbdefaulthosturl value will be used ' );
    console.error(err);
  });

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':'false'}));
app.use(express.static(path.join(__dirname, 'build')));

app.use('/api/book', book);
app.use('/api/auth', auth);
app.use('/api/bookReview', bookReview);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
