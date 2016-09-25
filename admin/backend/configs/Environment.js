'use strict'

var config = {
  development: {
    mode: 'development',
    db_url: 'mongodb://localhost/travelsurfer',
    port: 3000
  },
  production: {
    mode: 'production',
    db_url: 'mongodb://localhost/travelsurfer',
    port: 8000
  }
}

module.exports = (App, mode) => {

  let Env = config[mode?mode:process.env.NODE_ENV];
  App.mode    = Env.mode;
  App.db_url  = Env.db_url;
  App.port    = Env.port;

}
