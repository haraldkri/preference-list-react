describe('Login Redirect', () => {
    afterEach(() => {
        cy.logout()
    })

    it('should redirect to the login page if not authenticated', () => {
        // Visit the home page or any protected route
        cy.visit('/');

        // Assert that redirect to login page is working
        cy.url().should('include', '/login');

        // Assert that login button is visible
        cy.contains('Sign in').should('be.visible');
    });

    it('should automatically log in user', () => {
        cy.login();
        cy.visit('/')
        cy.contains('Created by').should('be.visible');
    })
});