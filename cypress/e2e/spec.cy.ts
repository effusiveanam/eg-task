describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')

    const title = 'Kitchen Sink'
    const titleElement = cy.get('h1').first()
    titleElement.should('include.text', title)
  })
})