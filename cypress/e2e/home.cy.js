describe('navbar present', () => {
  it('loads home page', () => {
    cy.visit('http://localhost:3000')
    cy.get('.navbar').contains('Home')
  })

  it('contains footer', () => {
    cy.visit('http://localhost:3000')
    cy.get('.react-app-footer').contains('Thanks')
  })

  it('contains apod element', () => {
    cy.visit('http://localhost:3000')
    cy.get('.apod-content').contains('Taken by')
  })

  it('navigates to home page', () => {
    cy.visit('http://localhost:3000')
    cy.get('.navbar').contains('Home').click()
    cy.location('pathname').should('eq', '/')
  })

  it('navigates to mars rover page', () => {
    cy.visit('http://localhost:3000')
    cy.get('.nav-link').contains('Mars Rover').click()
    cy.location('pathname').should('eq', '/mars-rover')
  })

  it('mars rover element present', () => {
    cy.visit('http://localhost:3000')
    cy.get('.nav-link').contains('Mars Rover').click()
    cy.get('.apod-content').contains('Landing date')
  })
})