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

  profile: function (req, res, next) {
    if (req.isAuthenticated())
      return res.status(202).json({user:req.user});
    res.status(401).json({err:'Unauthorized ! Not Authenticated'});
  },

  findOne: function(req, res, next) {
    req.models.user.findOne({_id:req.params.id}, function(err, user) {
      if (user === undefined) return res.notFound();
      if (err) return next(err);
      res.status(200).json(user);
    });
  },

  create: function(req, res, next) {
    req.models.user.register(new req.models.user({ username: req.body.username }), req.body.password, function(err, user) {
      if (err) { // ex: name that already exists
        console.log('ERR :',user);
        return next(err);
      }
      passport.authenticate('local')(req, res, function(){
        req.session.save(function (err) { // ex: username that doesn’t exist
          if (err) return next(err);
          res.status(201).json(user);
        });
      });
    })
  },

  login: function(req, res, next) {
    req.session.save(function (err) {
      if (err) return next(err);
      res.status(201).json(req.user);
    });
  },

  logout: function(req, res, next) {
    req.logout();
    req.session.save(function (err) {
      if (err) return next(err);
      res.status(201).json(req.user);
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
