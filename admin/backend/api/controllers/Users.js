'use strinct'

var _ = require('lodash')

module.exports = {

  getAll: function(req, res, next) {
    req.models.user.find(req.query, function(err, users){
      if (err) return res.json({error: err}, 500);
      res.status(200).json(_.userBy(users, 'created_at', 'desc'));
    })
  },

  findOne: function(req, res, next) {
    req.models.user.findOne(req.params.id, function(err, user) {
      if (user === undefined) return res.notFound();
      if (err) return next(err);
      res.status(200).json(user);
    });
  },

  create: function(req, res, next) {
    req.models.user.create(req.body, function(err, user) {
      if (err) return next(err);
      res.status(201).json(user);
    });
  },

  update: function(req, res, next) {
    var id       = req.params.id
      , criteria = _.merge({}, req.params, req.body);
    if (!id) return res.badRequest('No id provided.');
    req.models.user.update(id, criteria, function(err, user) {
      if (user === undefined) return res.notFound();
      if (err) return next(err);
      res.json(user);
    });
  },

  destroy: function(req, res, next) {
    var id = req.params.id
    if (!id) return res.badRequest('No id provided.');
    req.models.user.findByIdAndRemove(id, req.body, function (err, result) {
      if (err) return next(err);
      res.json(result);
    });
  }

}
