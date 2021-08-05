describe('chitter', function(){
    it('should have a home screen with a welcome message', function(){
        cy.visit('/')
        cy.get('#welcomeMessage').should('contain', 'Welcome to Chitter')
    })

    it('should allow the user to click a button to navigate to the chitter home page', function(){
        cy.get('#homepageButton').click()
        cy.url().should('include', '/home')
    })
})