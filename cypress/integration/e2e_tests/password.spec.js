describe('Password Test', () => {
	before(() => {
		cy.visit('http://zero.webappsecurity.com/')
	})

	it('Should click on the singin button', () => {
		cy.get('#signin_button').click()
	})

	it('Should click on the forgotten password', () => {
		cy.get('.offset3 > a').click()
	})

	it('Should fill email form', () => {
		cy.get('#user_email').type('test.email@email.com')
	})

	it('Should submit the form', () => {
		cy.contains('Send Password').click()
	})
})