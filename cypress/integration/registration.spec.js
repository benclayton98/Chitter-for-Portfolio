describe('Chitter sign-up', function (){
    it('should allow the user to sign up', function(){
        cy.task('taskTruncateTables')
        cy.visit('/')
        cy.get('#signupButton').click()
        cy.get('#newEmail').type('user@chitter.com')
        cy.get('#newUsername').type('username123')
        cy.get('#newName').type('John Smith')
        cy.get('#newPassword').type('password')
        cy.get('#signUpSubmit').click()
        cy.url().should("contain", "/home")
        cy.get('#welcomeMessage').should('contain', 'Welcome John Smith')
    })
})