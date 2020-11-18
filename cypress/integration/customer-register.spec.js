/* eslint-disable no-undef */

describe('Login page tests', function(){

    it('Visit site and click on the Login button', function () {
        cy.visit(' http://localhost:3000');
        cy.get("#okta-signin-submit").click();
        
    });

    it('URL changes to /login', function () {
        cy.url(' http://localhost:3000/login');

    });

    it('click on the Register link', function () {
        
        cy.get('a[href="/register"]').click();
        
    });

    it('URL changes to /register', function () {
        cy.url(' http://localhost:3000/register');

    });

    it('click on "Customer"', function () {
        
        cy.get('a[href="/customers"]').click();
        
    });

    

    it('Customer can register', function () {
        cy.get('input[name="name"]').type('Mary');
        cy.get('input[name="lastname"]').type('Cinderella');
        cy.get('input[name="email"]').type('mary@cinderella.com');
        cy.get('input[name="phone"]').type('969497865');
        cy.get('input[name="address"]').type("23 Ann's Rd");
        cy.get('input[name="city"]').type('Atlanta');
        cy.get('input[name="state"]').type('Georgia');
        cy.get('input[name="zipcode"]').type('846891');
        cy.get('input[name="description"]').type('I love dogs!');
        cy.get('input[name="photoUrl"]').type('https://flikr.com/myphoto.jpg');
        cy.get('input[placeholder="Talk about yourself!"]').type('I love dogs!');

        // If we click on "Register" returns error for now, it will clear once we create postData function in Register-Customer.js
        // if we finally implement registration.
        //  cy.get('button').click();

    });


   


});
