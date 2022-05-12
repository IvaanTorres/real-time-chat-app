/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable no-undef */
import type { Socket as SocketIOClient } from 'socket.io-client'
import './commands'

declare global {
  namespace Cypress {
    interface Chainable {
      // Auth commands
      login(ioServerURL: string): Chainable<Element>
      logout(): Chainable<Element>

      // Chat commands
      connect(ioClient: SocketIOClient, ioServerURL: string, username: string): Cypress.Chainable<SocketIOClient>
      disconnect(ioClient: SocketIOClient): Cypress.Chainable<SocketIOClient>

      // Messages
      sendMessage(ioClient: SocketIOClient): Chainable<Element>
    }
  }
}
