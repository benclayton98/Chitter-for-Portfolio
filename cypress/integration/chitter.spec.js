describe('chitter', function(){
    it('should have a home screen with a welcome message', function(){
        cy.visit('/')
        cy.get('#welcomeMessage').should('contain', 'Welcome to Chitter')
    })

    it('should display a database entry as a chitter', function(){
        cy.get('#chitter').should('contain', 'This is my First Chitter')
    })

    it('should display chitters in reverse chronological order', function(){
        cy.get('#chitter-0').should('contain', 'This is my Third Chitter')
        cy.get('#chitter-2').should('contain', 'This is my First Chitter') 
    })


})