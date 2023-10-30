
export function login(email, password, rememberMe){
  cy.visit('auth/login')

  cy.get('form input#input-email').type(email)
  cy.get('form input#input-password').type(password)

  if(rememberMe){
    cy.get('form .custom-checkbox').click()
  }

    cy.get('form button[status="primary"]').click()
  cy.url().should('contain', '/pages')
}
