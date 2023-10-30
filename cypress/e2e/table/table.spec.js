
describe("Table page", ()=> {
  // beforeEach(() => {
  //   cy.visit('pages/tables/smart-table')
  // });
  //
  // it('should enter the data into the table', () => {
  //
  //   cy.get('a.ng2-smart-action.ng2-smart-action-add-add').click()
  //   cy.get('input.form-control').eq(6).type('77')
  //   cy.get('input.form-control').eq(7).type('Sasha')
  //   cy.get('input.form-control').eq(8).type('Dziubas')
  //   cy.get('input.form-control').eq(9).type('SashaDzyu')
  //   cy.get('input.form-control').eq(10).type('dzyu77@gmail.com')
  //   cy.get('input.form-control').eq(11).type('34')
  //   cy.get('i.nb-checkmark').click()
  //
  //   cy.get('div.ng-star-inserted').eq(7).should('contain','77')
  //   cy.get('div.ng-star-inserted').eq(8).should('contain','Sasha')
  //   cy.get('div.ng-star-inserted').eq(9).should('contain','Dziubas')
  //   cy.get('div.ng-star-inserted').eq(10).should('contain','SashaDzyu')
  //   cy.get('div.ng-star-inserted').eq(11).should('contain','dzyu77@gmail.com')
  //   cy.get('div.ng-star-inserted').eq(12).should('contain','34')
  //
  //   cy.get('i.nb-edit').eq(0).click()
  //   cy.get('input.form-control').eq(6).clear().type('777')
  //   cy.get('input.form-control').eq(7).clear().type('sasha')
  //   cy.get('input.form-control').eq(8).clear().type('dziubas')
  //   cy.get('input.form-control').eq(9).clear().type('SashaDzyu77')
  //   cy.get('input.form-control').eq(10).clear().type('DZYU@gmail.com')
  //   cy.get('input.form-control').eq(11).clear().type('35')
  //   cy.get('i.nb-checkmark').click()
  //
  //   cy.get('div.ng-star-inserted').eq(7).should('contain','777')
  //   cy.get('div.ng-star-inserted').eq(8).should('contain','sasha')
  //   cy.get('div.ng-star-inserted').eq(9).should('contain','dziubas')
  //   cy.get('div.ng-star-inserted').eq(10).should('contain','SashaDzyu77')
  //   cy.get('div.ng-star-inserted').eq(11).should('contain','DZYU@gmail.com')
  //   cy.get('div.ng-star-inserted').eq(12).should('contain','35')
  // });

    it('should enter the data into the table', () => {
    cy.enterData('77', 'Sasha', 'Dziubas', 'SashaDzyu1', 'dzyu77@gmail.com', 34)
      cy.changeData('777', 'sasha', 'dziubas', 'SashaDzyu77', 'DZYU@gmail.com', 35)
  })


})

