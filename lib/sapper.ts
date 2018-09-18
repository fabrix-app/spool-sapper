import { FabrixApp } from '@fabrix/fabrix'
// import { Sapper as sapper } from 'sapper'

export const Sapper = {
  /**
   * Create the Stores
   */
  init: (app: FabrixApp) => {
    const manifest = app.config.get('sapper.manifest')
    const webMiddlewares = app.config.get('web.middlewares')
    app.config.set('web.middlewares', Object.assign(webMiddlewares, {
      sapper: {}
    }))
    return Promise.resolve()
  },

  /**
   * Unload the Stores
   */
  unload: (app: FabrixApp) => {
    // Stop Sapper
    return Promise.resolve()
  }
}
