import {login} from "../../utils/auth";

describe('Log in', ()=>{
  // it('should login with valid credentials', ()=>{
  //   cy.visit('auth/login')
  //
  //   cy.get('form input#input-email').type('dzyu@mail.com')
  //   cy.get('form input#input-password').type('Asdf7890')
  //
  //   cy.get('form .custom-checkbox').click()
  //   cy.get('form button[status="primary"]').click()
  //   cy.url().should('contain', '/pages')
  // })

  // it('should login with valid credentials', ()=>{
  //   login('dzyu@mail.com', 'Asdf7890', true)
  // })

  it('should login with valid credentials', ()=>{
    cy.login('dzyu@mail.com', 'Asdf7890', true)
  })
})
