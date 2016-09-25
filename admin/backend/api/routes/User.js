'use strict'

var Router = require('express').Router()
  , Controllers = {
      Users: require('../controllers/Users')
    }

Router.get('/', Controllers.Users.getAll)
      .get('/:id', Controllers.Users.findOne)
      .post('/', Controllers.Users.create)
      .put('/:id', Controllers.Users.update)
      .delete('/:id', Controllers.Users.destroy)

module.exports = Router
