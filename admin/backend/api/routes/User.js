'use strict'

var Router = require('express').Router()
  , Controllers = {
      Users: require('../controllers/Users')
    }

Router.get('/users', Controllers.Users.getAll)
      .get('/user/:id', Controllers.Users.findOne)
      .post('/user', Controllers.Users.create)
      .put('/user/:id', Controllers.Users.update)
      .delete('/user/:id', Controllers.Users.destroy)

module.exports = Router
