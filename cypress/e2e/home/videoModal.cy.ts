describe('testing video modal on home', () => {
  beforeEach(() => {
    cy.visitHome()
  })

  it('should open the modal on click in a card', () => {
    cy.get('#videos-container').first().click()
    cy.get('#headlessui-dialog-panel-\\:r3\\:').should('be.visible')
    cy.get('[data-headlessui-state="open"]').should('be.visible')
  })

  it('should have a video when modal is opened', () => {
    cy.get('#videos-container').first().click()
    cy.wait(3000)
    cy.get('#loading-video').should('not.exist')
  })

  it('should close modal on click on close button', () => {
    cy.get('#videos-container').first().click()
    cy.get('#close-button').click()
    cy.get('#headlessui-dialog-panel-\\:r3\\:').should('not.exist')
  })
})
