/// <reference types="Cypress" />

describe('SocialPie-login', function () 
{
    
    // it('Verify that user is redirected to Forgot Password page when clicking on Forgot Password link', function () {
    //     cy.visit('https://app.socialpie.io:7804/session/signin')
    //     cy.get('.tex-1').contains(' Forgot password? ').click()
    //     cy.url().should('eq','https://app.socialpie.io:7804/session/forget-password')
    // })

    // it('To verify that user should not be able to send recover code without adding the mail in the field', function () {
    //     cy.visit('https://app.socialpie.io:7804/session/signin')
    //     cy.get('.tex-1').contains(' Forgot password? ').click()
    //     cy.get('[type="submit"]').should('be.visible').and('be.disabled')
    // })


    // it('To verify that user should be able to redirect on Sign In page from the forget password page', function () {
    //     cy.visit('https://app.socialpie.io:7804/session/signin')
    //     cy.get('.tex-1').contains(' Forgot password? ').click()
    //     cy.get('[type="button"]').click()
    //     cy.url().should('eq', 'https://app.socialpie.io:7804/session/signin')
    // })

    
    // it('To verify that user should be able to display the error message by adding the wrong email in the field', function () {
    //     cy.visit('https://app.socialpie.io:7804/session/signin')
    //     cy.get('.tex-1').contains(' Forgot password? ').click()
    //     cy.get('input[name="email"]').type('farhadjaved999@gmail.com')
    //     cy.get('[type=submit]').click()
    //     cy.get('.mat-button-wrapper').should('be.visible')
    // })
    
    // it('To verify that user should be able to display the error message by adding the unregistered email in the field', function () {
    //     cy.visit('https://app.socialpie.io:7804/session/signin')
    //     cy.get('.tex-1').contains(' Forgot password? ').click()
    //     cy.get('input[name="email"]').type('farhadjaved999@gmail.com')
    //     cy.get('[type=submit]').click()
    //     cy.get('.mat-button-wrapper').should('be.visible')
    // })

    // it('To verify that user should not be able to change the password of the current account by entering wrong code', function () {
    //     //cy.visit('https://app.socialpie.io:7804/session/signin')
    //     //cy.get('.tex-1').contains(' Forgot password? ').click()
    //     cy.visit('https://app.socialpie.io:7804/session/recover-password/resocialpie2@mailinator.com')
    //     //cy.get('input[name="email"]').type('resocialpie@mailinator.com')
    //     //cy.get('[type=submit]').click()
    //     //cy.get('[id=mat-input-7]').type('resocialpie2@mailinator.com')
    //     cy.get('input[name="code"]').type('123456')
    //     cy.get('input[name="password"]').type('Paramount23?')
    //     cy.get('input[type="password"]').last().type('Paramount23?')
    //     cy.get('.mat-button-wrapper').contains(' Change Password ').click()
    //     cy.get('.mat-button-wrapper').should('be.visible')
    // })

    // it('To verify that user should not be able to change the password by adding the old password in the fields', function () {
    //     cy.visit('https://app.socialpie.io:7804/session/signin')
    //     cy.get('.tex-1').contains(' Forgot password? ').click()
    //     //cy.visit('https://app.socialpie.io:7804/session/recover-password/resocialpie2@mailinator.com')
    //     let url = 'farhad.jgo@gmail.com'
    //     cy.get('input[name="email"]').type(url)
    //     cy.get('[type=submit]').click()
    //     cy.wait(2000)
    //     //cy.get('input[name="code"]').type('123456')
    //     cy.get('input[name="password"]').type('Paramount23?')
    //     cy.get('input[type="password"]').last().type('Paramount23?')
    //     cy.get('.mat-button-wrapper').contains(' Change Password ').click()
    //     cy.url().should('eq','https://app.socialpie.io:7804/session/signin')
    //     cy.get('#org-sub-heading').should('be.eq','Enter New password')
    //     cy.url().should('eq','https://app.socialpie.io:7804/session/recover-password/'+url)
    // })

    // it('To verify that user should be able to display the verification message of not matching the new password', function () {
    //     cy.visit('https://app.socialpie.io:7804/session/signin')
    //     cy.get('.tex-1').contains(' Forgot password? ').click()
    //     //cy.visit('https://app.socialpie.io:7804/session/recover-password/resocialpie2@mailinator.com')
    //     cy.get('input[name="email"]').type('resocialpie@mailinator.com')
    //     cy.get('[type=submit]').click()
    //     cy.get('input[name="code"]').type('123456')
    //     cy.get('input[name="password"]').type('Paramount23?')
    //     cy.get('input[type="password"]').last().type('Paramount23??')
    //     cy.get('.mat-button-wrapper').should('be.visible')
    // })
    
    // it('To verify that user should be able to change the password', function () {
    //     cy.visit('https://app.socialpie.io:7804/session/signin')
    //     cy.get('.tex-1').contains(' Forgot password? ').click()
    //     //cy.visit('https://app.socialpie.io:7804/session/recover-password/resocialpie2@mailinator.com')
    //     cy.get('input[name="email"]').type('resocialpie2@mailinator.com')
    //     cy.get('[type=submit]').click()
    //     cy.wait(8000)
    //     //cy.get('input[name="code"]').type('123456')
    //     cy.get('input[name="password"]').type('Paramount23?')
    //     cy.get('input[type="password"]').last().type('Paramount23?')
    //     cy.get('.mat-button-wrapper').contains(' Change Password ').click()
    //     cy.url().should('eq','https://app.socialpie.io:7804/session/signin')
    // })



    // it('Does not do much!', function()
    //     {
    //       cy.request('https://app.socialpie.io:7804/session/signin')  
    //       //var number = cy.get('.signup-heading').contains("15")
    //       cy.get('.tex-1').contains(' Forgot password? ').click()
    //       cy.get('input[name="email"]').type('resocialpie@mailinator.com')
    //       cy.get('[type=submit]').click()
    //       cy.visit('https://www.mailinator.com/')
    //       cy.get('#addOverlay').type('resocialpie')
    //       cy.get('[type=button]').last().click()
    //       cy.wait(2000)
    //       const button = cy.get('.ng-binding').contains('Your verification code')
    //       button.click()
    //       cy.get('body').invoke('text')
    //       .then(sometext => {
    //       var pattern = /[0-9]+/g;
    //       const email = sometext.match(pattern)
    //       cy.log(email);
    //       cy.go('back');
    //      //         cy.visit("https://app.socialpie.io:7804/session/signin")
    //     //           cy.get('#username').type(String(email))
                  
    //            })
            
    
    //         })

    it('Does not do much!', function()
       {
        cy.request('https://app.socialpie.io:7804/session/signin')
        cy.wait(5000)
        cy.visit('https://www.mailinator.com/')
        
    
       })


})