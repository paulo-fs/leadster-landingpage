describe('testing videos pagination on home', () => {
  beforeEach(() => {
    cy.visitHome()
  })

  it('should have at least one page', () => {
    cy.get('#pagination1').should('exist').and('be.visible')
  })

  it('should have more than one page if the selected caregory is ALL', () => {
    cy.get('#pagination1').should('exist').and('be.visible')
    cy.get('#pagination2').should('exist').and('be.visible')
    cy.get('#pagination3').should('exist').and('be.visible')
  })

  it('should be possible change the videos list on change page', () => {
    cy.get('#\\32 digitalMarketing').should('exist').and('be.visible')

    cy.get('#pagination2').click()
    cy.get('#\\32 digitalMarketing').should('not.exist')
  })
})
