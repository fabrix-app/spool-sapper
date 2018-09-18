'use strict'
const ExpressSpool = require('@fabrix/spool-express').ExpressSpool
const SapperSpool = require('../../dist').SapperSpool

module.exports = {
  pkg: {
    name: require('../../package').name + '-test'
  },
  api: {
    models: {},
    controllers: {},
    services: {}
  },
  config: {
    sapper: {

    },
    web: {
      express: require('express'),
      middlewares: {
        order: [
          'addMethods',
          'cookieParser',
          'session',
          'bodyParser',
          'sapper',
          'methodOverride',
          'router',
          'www',
          '404',
          '500'
        ]
      }
    },
    main: {
      spools: [
        ExpressSpool,
        SapperSpool
      ]
    }
  }
}


