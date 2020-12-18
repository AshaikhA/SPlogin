/// <reference types="Cypress" />

import LoginPage from '../Login-TestSuits/PageObjects/LoginPage'


describe('SocialPie-login',function()
{
    before(function()
    {
        cy.fixture('TestData').then(function(data)
        {
            this.data=data
        })
    })
    const login=new LoginPage()
    it('it should be redirected to Dashboard screen',function()
    {
        
        login.visit()
        cy.get('[type="submit"]').should('be.disabled')
        cy.get('[id=username]').should("be.visible").and('be.enabled').and('exist')
        cy.get('[id=password]').should("be.visible").and('be.enabled').and('exist')
        cy.get('[id=username]').click()
        login.username(this.data.username)
        login.password(this.data.password)
        cy.get('[type="submit"]').should('be.visible').and('not.be.disabled')
        login.submit()
        cy.title().should('be.equal','Social Pie')
        cy.wait(20000)
        cy.get('.mat-tooltip-trigger').click()
        cy.get('button').contains('Yes').click()
        cy.url().should('eq', 'https://app.socialpie.io:7804/session/signin')
      
    })

    // it('Error message for wrong username/password should be displayed',function()
    // {
        
    //     cy.reload()
    //     cy.wait(20000)
    //     login.username(this.data.username)
    //     login.password(this.data.password)
    //     cy.get('[type="submit"]').should('be.visible').and('not.be.disabled')
    //     login.submit()
    //     cy.wait(5000)
    //     login.visit()
    // })
})
