var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
let mysql = require('mysql');

var indexRouter = require('./routes/index');
var userRouter = require('./routes/user');
var userCars = require('./routes/userCars');
var offersRouter = require('./routes/offers');
var carDetailsRouter = require('./routes/carDetails');
var adminRouter = require('./routes/admin');
var insuranceRouter = require ('./routes/insurance')
const connection = require('./config/db.js');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static('public'))




app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/user', userRouter);
app.use('/offers', offersRouter);
app.use('/userCars', userCars);
app.use('/carDetails', carDetailsRouter);
app.use('/admin', adminRouter);
app.use('/insurance', insuranceRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
