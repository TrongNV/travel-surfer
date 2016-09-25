'use strict'

var bodyParser  = require('body-parser')
  , Models      = {
      order : require('../models/Order'),
      user : require('../models/User')
    }
  , Routes      = {
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

    .use('/api/orders', Routes.order)
    .use('/api/users', Routes.user)

    .get('/', function(req,res){
      res.render('index');
    })

}
