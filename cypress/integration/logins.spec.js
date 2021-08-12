describe('Chitter Users', function () {
  beforeEach(function () {
    cy.task('taskTruncateTables')
    cy.task('taskCreateTestUser')
  })

  it('sign in', function () {
    cy.visit('/')
    cy.get('#usernameLogin').type('test')
    cy.get('#passwordLogin').type('test123')
    cy.get('#homepageButton').click()
    cy.url().should('include', '/home')
  })

  it('wrong email prevents sign in', function () {
    cy.visit('/')
    cy.get('#usernameLogin').type('fail@test.com')
    cy.get('#passwordLogin').type('test123')
    cy.get('#homepageButton').click()
    cy.url().should('not.include', '/home')
    cy.get('#errorMessage').should('contain', 'Sorry, login details are incorrect')
  })

  it('wrong password prevents sign in', function () {
    cy.visit('/')
    cy.get('#usernameLogin').type('test@test.com')
    cy.get('#passwordLogin').type('password')
    cy.get('#homepageButton').click()
    cy.url().should('not.include', '/home')
    cy.get('#errorMessage').should('contain', 'Sorry, login details are incorrect')
  })

  it('can sign out', function () {
    cy.visit('/')
    cy.get('#usernameLogin').type('test')
    cy.get('#passwordLogin').type('test123')
    cy.get('#homepageButton').click()
    cy.url().should('include', '/home')
    cy.get('#logOutButton').click()
    cy.get('#loginWelcome').should('exist')
  })
})
