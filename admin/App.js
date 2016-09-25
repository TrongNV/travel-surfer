'use strict';

var Express     = require('express')
  , Path        = require('path')
  , App         = Express()

require('./backend/configs/Application')(App, 'development')

App
  .use(Express.static(Path.join(__dirname, '/public')))

  .engine('html', require('ejs').renderFile)
  .set('view engine', 'html')
  .set('views', Path.join(__dirname, '/backend/views'))

  .listen(App.port, function (){ console.log('Server mode %s, @Port %s.',App.mode, App.port) })
