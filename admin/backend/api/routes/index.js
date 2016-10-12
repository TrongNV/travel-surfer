'use strict';

var passport        = require('passport')
  , bodyParser      = require('body-parser')
  , cookieParser    = require('cookie-parser')
  , expressSession  = require('express-session')
  , LocalStrategy   = require('passport-local').Strategy
  , Models          = {
      order : require('../models/Order'),
      user : require('../models/User')
    }
  , Routes          = {
      order: require('./Order'),
      user: require('./User')
    }
;

module.exports = (App) => {

  App
    .use(function(req, res, next) {
      req.models = Models;
      next();
    })

    .use(bodyParser.urlencoded({extended:true}))
    .use(bodyParser.json())

    .use(cookieParser())
    .use(expressSession({
      secret: 'keyboard cat',
      resave: false,
      saveUninitialized: false
    }))
    .use(passport.initialize())
    .use(passport.session())

    .use('/api', Routes.user)
    .use('/api', Routes.order)

    .get('/', function(req,res){
      res.render('index');
    })
  ;

  passport.use(new LocalStrategy(Models.user.authenticate()));
  passport.serializeUser(Models.user.serializeUser());
  passport.deserializeUser(Models.user.deserializeUser());

}
