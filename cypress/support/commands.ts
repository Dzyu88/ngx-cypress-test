/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }


Cypress.Commands.add('login', function (email, password, rememberMe){
  cy.visit('auth/login')

  cy.get('form input#input-email').type(email)
  cy.get('form input#input-password').type(password)

  if(rememberMe){
    cy.get('form .custom-checkbox').click()
  }

  cy.get('form button[status="primary"]').click()
  cy.url().should('contain', 'http://localhost:4200/pages')
})

Cypress.Commands.add('enterData', function (id, name, lastName, userName, emeil, age) {
  cy.visit('pages/tables/smart-table')

  cy.get('a.ng2-smart-action.ng2-smart-action-add-add').click()
  cy.get('input.form-control').eq(6).type(id)
  cy.get('input.form-control').eq(7).type(name)
  cy.get('input.form-control').eq(8).type(lastName)
  cy.get('input.form-control').eq(9).type(userName)
  cy.get('input.form-control').eq(10).type(emeil)
  cy.get('input.form-control').eq(11).type(age)
  cy.get('i.nb-checkmark').click()

  cy.get('div.ng-star-inserted').eq(7).should('contain', id)
  cy.get('div.ng-star-inserted').eq(8).should('contain', name)
  cy.get('div.ng-star-inserted').eq(9).should('contain', lastName)
  cy.get('div.ng-star-inserted').eq(10).should('contain', userName)
  cy.get('div.ng-star-inserted').eq(11).should('contain', emeil)
  cy.get('div.ng-star-inserted').eq(12).should('contain',age)
})

Cypress.Commands.add('changeData', function (id2, name2, lastName2, userName2, emeil2, age2){
  cy.get('i.nb-edit').eq(0).click()
  cy.get('input.form-control').eq(6).clear().type(id2)
  cy.get('input.form-control').eq(7).clear().type(name2)
  cy.get('input.form-control').eq(8).clear().type(lastName2)
  cy.get('input.form-control').eq(9).clear().type(userName2)
  cy.get('input.form-control').eq(10).clear().type(emeil2)
  cy.get('input.form-control').eq(11).clear().type(age2)
  cy.get('i.nb-checkmark').click()

  cy.get('div.ng-star-inserted').eq(7).should('contain',id2)
  cy.get('div.ng-star-inserted').eq(8).should('contain',name2)
  cy.get('div.ng-star-inserted').eq(9).should('contain',lastName2)
  cy.get('div.ng-star-inserted').eq(10).should('contain',userName2)
  cy.get('div.ng-star-inserted').eq(11).should('contain',emeil2)
  cy.get('div.ng-star-inserted').eq(12).should('contain',age2)
})
