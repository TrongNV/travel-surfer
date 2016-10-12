var mongoose = require('mongoose')
  , passportLocalMongoose = require('passport-local-mongoose')
  // , UserSchema = new mongoose.Schema({
  , UserSchema = mongoose.Schema({
      username  : String,
      password  : String,
      created_at: { type: Date, default: Date.now },
      updated_at: { type: Date, default: Date.now }
    })
  ;

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', UserSchema);
