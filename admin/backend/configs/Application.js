'use strict'

module.exports = (App, mode) => {

  process.env.NODE_ENV  = process.argv[2] ? process.argv[2] : mode

  require('./Environment')(App, mode)

  require('../api/routes')(App)

  require('../configs/Connection')(App.db_url)


}
