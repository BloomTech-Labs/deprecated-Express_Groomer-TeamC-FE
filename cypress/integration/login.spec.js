/* eslint-disable no-undef */

describe('Login page tests', function(){

    it('Visit lo and click on the Login button', function () {
        cy.visit(' http://localhost:3000')
        cy.get("#okta-signin-submit").click()
        
    });

    it('URL changes to /login', function () {
        cy.url(' http://localhost:3000/login')

    })

    it('User can login', function () {
        cy.get('#okta-signin-username').type('llama001@maildrop.cc')
        cy.get('#okta-signin-password').type('Test001Test')
        cy.get('#okta-signin-submit').click()

    })


   


})
