'use strict'

module.exports = (App, mode) => {

  process.env.NODE_ENV  = process.argv[2] ? process.argv[2] : mode

  require('./Environment')(App, mode)

  require('../configs/Connection')(App.db_url)

  require('../api/routes')(App)

}
