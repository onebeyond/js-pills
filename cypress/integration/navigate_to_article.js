describe('The Home Page', () => {
  it('successfully navigate into an article', () => {
    cy.visit('http://localhost:8000');
    cy.get('[data-cy=article-link]').first().click();
    cy.url().should('include', 'pill');
  });
});
