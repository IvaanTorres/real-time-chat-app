import { locales, routes } from '~/enums'

context('Navbar tools', () => {
  // TODO: Add setup function to expect the real locales and not just strings
  const HOST = Cypress.env('HOST')

  beforeEach(() => {
    cy.visit(HOST).then(() => cy.url().should('contain', routes.LOGIN))
  })

  it('should switch theme', () => {
    // The theme should be light by default
    cy.get('html').should('have.not.class', 'dark')
    cy.get('button[role=\'switch-button\']').click()
    // The theme should be dark after the click
    cy.get('html').should('have.class', 'dark')
  })

  it('should change locale', () => {
    const localeList = Object.values(locales)

    // Open the locale dropdown
    cy.get('button[type=\'submit\']').should('contain', 'Login')
    cy.get('div[role=\'select-button\']').trigger('mouseenter')
    cy.get('div[role=\'dropdown\']').should('exist')
    // Check that the locale dropdown contains all the locales
    cy.get('div[role=\'dropdown-item\']').each(($el) => {
      expect(localeList).to.contain($el.text())
    })
    // Select the spanish locale
    cy.get('div[role=\'dropdown-item\']').each(($el) => {
      if ($el.text() === locales.SPANISH) cy.wrap($el).click()
    })
    // Check that the spanish locale is selected
    cy.get('button[type=\'submit\']').should('contain', 'Conectarse')
  })
})
