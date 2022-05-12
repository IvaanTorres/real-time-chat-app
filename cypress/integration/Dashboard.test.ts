/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
// https://glebbahmutov.com/blog/test-socketio-chat-using-cypress/
// https://docs.cypress.io/guides/references/trade-offs#Multiple-browsers-open-at-the-same-time

import type { Socket as SocketIOClient } from 'socket.io-client'
import { externalUser, user } from '~/__mocks__/user'
import { externalMessage, message } from '~/__mocks__/message'

// * The cy.wait() command is used to wait for an event to happen. Socket IO events are asynchronous, so we need to wait for them to happen.
// * Cypress.io doesn't support quite well async events, so we need to use a custom command.

context('Dashboard page', () => {
  const HOST = Cypress.env('HOST')
  const API = Cypress.env('API')
  let ioClient: SocketIOClient

  beforeEach(() => {
    cy.login(HOST)
    cy.wait(3000)
  })

  it('should receive a new user connection', () => {
    /* cy.wait(7000) */

    cy.connect(ioClient, API, externalUser.username).then((socket: SocketIOClient) => {
      ioClient = socket
      cy.get('div[role=\'usersList\']')
        .should('contain', user.username)
        .and('contain', externalUser.username)

      cy.get('div[id=\'chat\']')
        .should('contain', `The user ${externalUser.username} has connected`)

      cy.wait(1000)
      cy.disconnect(socket)
    })

    cy.logout()
  })

  it('should receive a user disconnection', () => {
    cy.wait(3000)

    // New client connection
    cy.connect(ioClient, API, externalUser.username).then((socket: SocketIOClient) => {
      cy.wait(3000)
      ioClient = socket

      cy.disconnect(socket)
      cy.get('div[role=\'usersList\']')
        .should('contain', user.username)
        .and('not.contain', externalUser.username)

      cy.get('div[id=\'chat\']')
        .should('contain', `The user ${externalUser.username} has disconnected`)

      cy.wait(1000)
    })

    cy.logout()
  })

  it('should send a message', () => {
    cy.wait(3000)
    cy.get('input[role=\'message-input\']').type(message.body)
    cy.get('button[role=\'send-message-button\']').click()
    cy.wait(1000)
    cy.get('div[id=\'chat\'] > div').last()
      .should('contain', message.body)
      .and('contain', user.username)

    cy.logout()
  })

  it('should receive a message', () => {
    /* cy.wait(3000) */

    cy.connect(ioClient, API, externalUser.username).then((socket: SocketIOClient) => {
      cy.wait(3000)
      ioClient = socket

      cy.sendMessage(socket)
      cy.wait(3000)

      cy.get('div[id=\'chat\'] > div').last()
        .should('contain', externalMessage.body)
        .and('contain', externalUser.username)

      cy.wait(3000)
    })
  })

  it('should logout', () => {
    cy.logout()
  })
})
