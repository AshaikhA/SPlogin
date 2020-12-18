/// <reference types="Cypress" />

//import LoginPage from './PageObjects/LoginPage'


describe('SocialPie-login', function () {
    before(function () {
        cy.fixture('TestData').then(function (data) {
            this.data = data
        })
    })
    //const login = new LoginPage()
    // //2
    it('Verify that a proper message gets displayed "Incorrect username or password" and user is unable to login when user presses "Sign in" button on entering the incorrect username AND password', function () {
        cy.visit('https://app.socialpie.io:7804/session/signin')
        cy.get('[id=username]').type('automation420@mailinator.com') 
        cy.get('[id=password]').type('Paramount23??')
        cy.get('[type="submit"]').should('be.visible').and('not.be.disabled')
        cy.get('[type="submit"]').click()
        cy.wait(5000)
        const msg = cy.get('.form-error-msg').contains('Incorrect username or password. ')
        msg.should('exist')
    })

    //1
    it('Verify that on entering the following URL in browser: https://app.socialpie.io:7801/sessions/signin user is redirected to Login Form', function () {
        cy.visit('https://app.socialpie.io:7804/session/signin')
        cy.url().should('eq', 'https://app.socialpie.io:7804/session/signin')
    })

    it('Verify that user should not be able to enter email by adding improper mail', function () {
        cy.visit('https://app.socialpie.io:7804/session/signin')
        cy.get('[id=username]').type('automation') 
        cy.get('[id=password]').type('Paramount23?')
        cy.get('[type="submit"]').should('be.visible').and('be.disabled')
    })

    // 3
    it('Verify that a proper message gets displayed "Incorrect username or password" and user is unable to login when user presses "Sign in" button on entering the correct username BUT incorrect password', function () {
        cy.visit('https://app.socialpie.io:7804/session/signin')
        cy.get('[id=username]').type('automation@mailinator.com') 
        cy.get('[id=password]').type('Paramount23??')
        cy.get('[type="submit"]').should('be.visible').and('not.be.disabled')
        cy.get('[type="submit"]').click()
        cy.wait(2000)
        cy.get('.form-error-msg').contains('Incorrect username or password. ')
        cy.wait(5000)
    })

    //5
    it('Verify that the "sign in" button should be disable when  without entering anything in email AND password fields', function () {
        cy.visit('https://app.socialpie.io:7804/session/signin')
        cy.get('[type="submit"]').should('be.visible').and('be.disabled')
        cy.wait(5000)
    })

    //6
    it('Verify that the "sign in" button should be disable when entering the incorrect password BUT "email" filed is blank', function () {
        cy.visit('https://app.socialpie.io:7804/session/signin')
        cy.get('[id=password]').type('Paramount23?')
        cy.get('[type="submit"]').should('be.visible').and('be.disabled')
        cy.wait(5000)
    })

    //7
    it('Verify that the "sign in" button should be disable when  entering the incorrect email  BUT password  filed is blank', function () {
        cy.visit('https://app.socialpie.io:7804/session/signin')
        cy.get('[id=username]').type('automation420@mailinator.com') 
        cy.get('[type="submit"]').should('be.visible').and('be.disabled')
        cy.wait(5000)
    })

    //8
    it('Verify that tab functionality is working properly for login form', function () {
        cy.visit('https://app.socialpie.io:7804/session/signin')
        cy.get('[type="submit"]').should('be.disabled')
        cy.get('[id=username]').should("be.visible").and('be.enabled').and('exist')
        cy.get('[id=password]').should("be.visible").and('be.enabled').and('exist')
        cy.get('[id=username]').click()
        cy.get('[id=username]').type('resocialpie@mailinator.com')
        cy.get('[id=password]').type('Paramount23?')
        cy.get('[type="submit"]').should('be.visible').and('not.be.disabled')
        cy.get('[type="submit"]').click()
        cy.title().should('be.equal', 'Social Pie')
        cy.wait(20000)
        //cy.get('.mat-tooltip-trigger').click()
        //cy.get('button').contains('Yes').click()
        //cy.url().should('eq', 'https://app.socialpie.io:7804/session/signin')
    })

    //12
    it('Verify that user is redirected to Forgot Password page when clicking on Forgot Password link', function () {
        cy.visit('https://app.socialpie.io:7804/session/signin')
        cy.get('.tex-1').contains(' Forgot password? ').click()
        cy.location().its('href').should('include', 'https://app.socialpie.io:7804/session/forget-password')
        cy.get('[type="submit"]').should('be.visible').and('be.disabled')
        cy.wait(5000)
    })

    //13
    it('Verify that user is redirected to Registration page when clicking Register an account link', function () {
        cy.visit('https://app.socialpie.io:7804/session/signin')
        cy.get('.text-center').contains(' Click Here ').click()
        cy.get('.signup-heading').contains('Try SocialPie for 15-day trial')
        cy.get('.mat-button-wrapper').should('be.visible')
        cy.wait(5000)
    })

    //14
    it('Verify that user is to create new organisation', function () {
        cy.visit('https://app.socialpie.io:7804/session/signin')
        cy.get('[id=username]').type('automation@mailinator.com') 
        cy.get('[id=password]').type('Paramount23?')
        cy.get('[type="submit"]').should('be.visible').and('not.be.disabled')
        cy.get('[type="submit"]').click()
        cy.wait(5000)
        cy.url().should('eq', 'https://app.socialpie.io:7804/session/create-organization')
        cy.get('.mat-button-wrapper').should('be.visible')
    })
})

