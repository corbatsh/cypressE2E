describe('Feedback test', () => {
	before(() => {
		cy.visit('http://zero.webappsecurity.com/')
		cy.contains('Feedback').click()
		cy.url().should('include', 'feedback.html')
	})

	it('Should load feedback form', () => {
		cy.get('form').should('be.visible')
	})

	it('Should fill feedback form', () => {
		cy.get('input[name="name"]').type('test.name')
		cy.get('input[name="email"]').type('test@email.test')
		cy.get('input[name="subject"]').type('test.subject')
		cy.get('textarea').type('test.name')
	})

	it('Should submit feedback form', () => {
		cy.get('.btn-signin').click()
	})

	it('Should display feedback message', () => {
		cy.get('h3').contains('Feedback')
	})
})