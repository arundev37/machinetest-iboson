require('dotenv').config();
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var { expressjwt: jwt } = require("express-jwt");
const mongoose = require('mongoose');
mongoose.connect(process.env.DB).then(() => console.log('DB conneccted')).catch(console.log);

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var productsRouter = require('./routes/products');
const purchasesRouter = require('./routes/purchases');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use(
  jwt({
    secret: process.env.secret,
    algorithms: ["HS256"],
  })
);
app.use('/users', usersRouter);
app.use('/products', productsRouter);
app.use('/purchases', purchasesRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // render the error page
  res.status(err.status || 500);
  res.json({ message: err.message });
});

module.exports = app;
