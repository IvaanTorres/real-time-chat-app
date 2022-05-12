// https://glebbahmutov.com/blog/test-socketio-chat-using-cypress/

import { user } from '~/__mocks__/user'

context('Login page', () => {
  const HOST = Cypress.env('HOST')

  it('should login', () => {
    cy.login(HOST)
    // Check that the user is logged in
    cy.get('div[role=\'usersList\']')
      .contains(user.username)
      .should('exist')
  })
})
