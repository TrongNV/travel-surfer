'use strinct'

var _         = require('lodash')
  , passport  = require('passport')
  ;

module.exports = {

  getAll: function(req, res, next) {
    req.models.user.find(req.query, function(err, users){
      if (err) return res.json({error: err}, 500);
      res.status(200).json(_.orderBy(users, 'created_at', 'desc'));
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
    req.models.user.register(new req.models.user({ username: req.body.username }), req.body.password, function(err, user) {
      if (err) {
        console.log('ERR',user);
        return next(err);
      }
      passport.authenticate('local')(req, res, function(){res.status(201).json(user)});
    })
    // req.models.user.create(req.body, function(err, user) {
    //   if (err) return next(err);
    //   res.status(201).json(user);
    // });
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
