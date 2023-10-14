describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000')
    cy.get('.navbar-brand').contains('Navbar')
  })

  it('failing', () => {
    cy.visit('http://localhost:3000')
    cy.get('.navbar-brand').contains('Navbar')
    cy.get('.nav-link').contains('Home').click()
    cy.location('pathname').should('eq', '/home')
  })
})