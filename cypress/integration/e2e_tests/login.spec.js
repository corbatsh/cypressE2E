describe('Login / Logout Test', () => {
	before(() => {
		cy.visit('http://zero.webappsecurity.com/index.html')
		cy.url().should('include', 'index.html')
		cy.get('#signin_button').click()
	})

	it('Should try to login with invalid data', () => {
		cy.login('Invalid username', 'Invalid password')
	})

	it('Should display error message', () => {
		cy
			.get('.alert-error')
			.should('be.visible')
			.and('contain', 'Login and/or password are wrong')
	})

	it('Should try to login with valid data', () => {
		cy.fixture('user').then(user => {
			const username = user.id
			const password = user.pwd

			cy.login(username, password)
		})
		cy.get('ul.nav-tabs').should('be.visible')
	})

	it('Should logout from application', () => {
		cy.contains('username').click()
		cy.get('#logout_link').click()
		cy.url().should('include', 'index.html')
	})
})