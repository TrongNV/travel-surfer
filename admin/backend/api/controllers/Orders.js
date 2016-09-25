'use strinct'

var _ = require('lodash')

module.exports = {

  getAll: function(req, res, next) {
    req.models.order.find(req.query, function(err, orders){
      if (err) return res.json({error: err}, 500);
      res.status(200).json(_.orderBy(orders, 'created_at', 'desc'));
    })
  },

  findOne: function(req, res, next) {
    req.models.order.findOne(req.params.id, function(err, order) {
      if (order === undefined) return res.notFound();
      if (err) return next(err);
      res.status(200).json(order);
    });
  },

  create: function(req, res, next) {
    req.models.order.create(req.body, function(err, order) {
      if (err) return next(err);
      res.status(201).json(order);
    });
  },

  update: function(req, res, next) {
    var id       = req.params.id
      , criteria = _.merge({}, req.params, req.body);
    if (!id) return res.badRequest('No id provided.');
    req.models.order.update(id, criteria, function(err, order) {
      if (order === undefined) return res.notFound();
      if (err) return next(err);
      res.json(order);
    });
  },

  destroy: function(req, res, next) {
    var id = req.params.id
    if (!id) return res.badRequest('No id provided.');
    req.models.order.findByIdAndRemove(id, req.body, function (err, result) {
      if (err) return next(err);
      res.json(result);
    });
  }

}
