/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */

import type { Socket as SocketIOClient } from 'socket.io-client'
import Client, { io } from 'socket.io-client'
import { events, routes } from '~/enums'
import { externalMessage } from '~/__mocks__/message'
import { user } from '~/__mocks__/user'

// Auth commands
Cypress.Commands.add('login', (ioServerURL: string) => {
  // Visit the login page
  cy.visit(ioServerURL).then(() => cy.url().should('contain', routes.LOGIN))
  // Login
  cy.get('input[name=\'username\']').type(user.username)
  cy.get('button[type=\'submit\']').click()
})

Cypress.Commands.add('logout', () => {
  cy.url().should('contain', routes.DASHBOARD)
  cy.get('div[role=\'usersList\']').should('contain', user.username)
  cy.get('button[role=\'logout\']').click()
  cy.url().should('contain', routes.LOGIN)
})

// Chat commands
Cypress.Commands.add('connect', (ioClient: SocketIOClient, ioServerURL: string, username: string) => {
  console.log('Cypress is connecting to socket server under name %s', username)
  // New client
  ioClient = Client(ioServerURL)
  // Set the client credentials
  ioClient.auth = { username }
  // Connect to the server
  io(ioServerURL, {
    autoConnect: false,
    forceNew: true,
  })
  // Connect the client
  ioClient.connect()

  return cy.wrap(ioClient)
})

Cypress.Commands.add('disconnect', (ioClient: SocketIOClient) => {
  ioClient.disconnect()
})

// Messages
Cypress.Commands.add('sendMessage', (ioClient: SocketIOClient) => {
  ioClient.emit(events.client.MESSAGE, externalMessage)
})
