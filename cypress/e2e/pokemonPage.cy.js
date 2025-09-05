describe('Pokemon Page', function() {
  it('When navigated to page, pokemon page has content', function() {
    cy.visit('http://localhost:5000/pokemon/bulbasaur')
    cy.get('.pokemon-info', { timeout: 10000}).should('be.visible')
    cy.contains('bulbasaur')
    cy.get('table tbody tr').each($th => {
        expect($th.text()).not.to.be.empty
    });
  })
})