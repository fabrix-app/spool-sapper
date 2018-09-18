/* eslint no-console: [0] */
'use strict'

const joi = require('joi')
import { sapperConfig } from './schemas'

export const Validator = {

  // Validate Sapper Config
  validateSapperConfig (config) {
    return new Promise((resolve, reject) => {
      joi.validate(config, sapperConfig, (err, value) => {
        if (err) {
          return reject(new TypeError('config.sapper: ' + err))
        }
        return resolve(value)
      })
    })
  }
}
