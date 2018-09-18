import { ExtensionSpool } from '@fabrix/fabrix/dist/common/spools/extension'
import { SanityError } from '@fabrix/fabrix/dist/errors'
import { Sapper } from './sapper'
import { Validator } from './validator'

import * as config from './config/index'
import * as pkg from '../package.json'
import * as api  from './api/index'

export class SapperSpool extends ExtensionSpool {
  public sapper: {[key: string]: any} = {}
  constructor(app) {
    super(app, {
      config: config,
      pkg: pkg,
      api: api
    })

    this.extensions = {
      sapper: {
        get: () => {
          return this.sapper
        },
        set: (newInstances) => {
          this.sapper = newInstances
          // throw new Error('sapper can not be set through FabrixApp, check spool-sapper instead')
        },
        enumerable: true,
        configurable: true
      }
    }
  }

  /**
   * Validate Configuration
   */
  async validate () {
    const requiredSpools = [ 'express' ]
    const spools = Object.keys(this.app.spools)

    if (!spools.some(v => requiredSpools.indexOf(v) >= 0)) {
      return Promise.reject(new Error(`spool-sapper requires spools: ${ requiredSpools.join(', ') }!`))
    }

    if (!this.app.config.get('sapper')) {
      return Promise.reject(new Error('No configuration found at config.sapper!'))
    }

    if (!this.app.config.get('web.middlewares.order').some(a => a === 'sapper')) {
      return Promise.reject(new Error('sapper middleware missing in web.middlewares.order!'))
    }

    return Promise.all([
      Validator.validateSapperConfig(this.app.config.get('sapper'))
    ])
      .catch(err => {
        return Promise.reject(err)
      })
  }

  /**
   * Check if there some stores, if not set a default one
   */
  configure() {
    this.sapper = {
      // htmlToSAPPER: (html) => {
      //   return Sapper.htmlToSAPPER(this.app, html)
      // }
    }
  }

  /**
   * create caching stores
   */
  async initialize() {
    return Sapper.init(this.app)
  }

  /**
   * unload caching stores
   */
  async unload() {
    return Sapper.unload(this.app)
  }

  sanity() {
    if (
      !this.app.config.get('web.middlewares.sapper')
      || !this.app.config.get('web.middlewares').sapper
      || !this.app.config.get('web').middlewares.sapper
    ) {
      throw new SanityError('sapper middleware missing in web.middlewares!')
    }
    if (
      !this.app.config.get('web.middlewares.sapper')
      || !this.app.config.get('web.middlewares').sapper
      || !this.app.config.get('web').middlewares.sapper
    ) {
      throw new SanityError('sapper middleware missing in web.middlewares!')
    }
  }
}
