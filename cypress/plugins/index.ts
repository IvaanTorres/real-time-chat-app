import path from 'path'
import { startDevServer } from '@cypress/vite-dev-server'

/**
 * @type {Cypress.PluginConfig}
 */
module.exports = (on: any, config: any) => {
  on('dev-server:start', (options: any) => {
    return startDevServer({
      options,
      viteConfig: {
        configFile: path.resolve(__dirname, '..', '..', 'vite.config.ts'),
      },
    })
  })

  return config
}
