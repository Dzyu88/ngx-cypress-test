
describe("Stepper page", ()=>{
  beforeEach(()=>{
    cy.visit('pages/modal-overlays/dialog')
  })

  it('should Find the pop-up', ()=>{
    cy.get('button').last().click()
    cy.get('nb-dialog-container').should('be.visible')
    cy.get('nb-dialog-container nb-card-header').should('have.text', 'Enter your name')
    cy.get('input.size-medium.shape-rectangle').should('exist')
    cy.get('nb-card-footer button').first().should('exist').should('have.text', 'Cancel')
    cy.get('nb-card-footer button').last().should('exist').should('have.text', 'Submit')
  });
})
