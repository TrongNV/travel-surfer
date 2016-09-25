'use strict'

var Router = require('express').Router()
  , Controllers = {
      Orders: require('../controllers/Orders')
    }

Router.get('/', Controllers.Orders.getAll)
      .get('/:id', Controllers.Orders.findOne)
      .post('/', Controllers.Orders.create)
      .put('/:id', Controllers.Orders.update)
      .delete('/:id', Controllers.Orders.destroy)

module.exports = Router
