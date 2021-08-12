describe('chitter', function () {
  beforeEach(function () {
    cy.task('taskCreateTestUser')
  })

  it('should have a home screen with a welcome message', function () {
    cy.visit('/')
    cy.get('#loginWelcome').should('contain', 'Welcome to Chitter')
  })

  it('should allow a user to sign in', function () {
    cy.visit('/')
    cy.get('#usernameLogin').type('test')
    cy.get('#passwordLogin').type('test123')
    cy.get('#homepageButton').click()
    cy.url().should('include', '/home')
  })

  it('should allow a user to create a chitter', function () {
    cy.task('taskTruncateChitters')
    cy.get('#addChitter').click()
    cy.get('#chitterTextBox').type('This is my First Chitter')
    cy.get('#chitterSubmit').click()
    cy.get('#chitter-0').should('contain', 'This is my First Chitter')
  })

  it('should display chitters in reverse chronological order', function () {
    cy.get('#addChitter').click()
    cy.get('#chitterTextBox').type('This is my Second Chitter')
    cy.get('#chitterSubmit').click()
    cy.get('#addChitter').click()
    cy.get('#chitterTextBox').type('This is my Third Chitter')
    cy.get('#chitterSubmit').click()
    cy.get('#chitter-0').should('contain', 'This is my Third Chitter')
    cy.get('#chitter-2').should('contain', 'This is my First Chitter')
  })
})
