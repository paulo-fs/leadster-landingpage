describe('testing videos catagories on home', () => {
  beforeEach(() => {
    cy.visitHome()
  })

  it('should change category', () => {
    cy.get('#\\33 9agency').should('not.exist')

    cy.get('#agency').click().should('have.focus')
    cy.get('#\\33 9agency').should('be.visible')

    cy.get('#digitalMarketing').click().should('have.focus')
    cy.get('#\\32 digitalMarketing').should('be.visible')
  })

  it('should not have agency items on another category', () => {
    cy.get('#chatBot').click()
    cy.get('#\\33 9agency').should('not.exist')

    cy.get('#digitalMarketing').click()
    cy.get('#\\33 9agency').should('not.exist')

    cy.get('#leads').click()
    cy.get('#\\33 9agency').should('not.exist')

    cy.get('#paidMedia').click()
    cy.get('#\\33 9agency').should('not.exist')
  })
})
