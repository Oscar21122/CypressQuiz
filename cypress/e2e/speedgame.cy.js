describe('Página de Speed Game', () => {
    it('Debe marcar exitosamente', () => {
      cy.visit('https://thelab.boozang.com/speedGame');  
      cy.get('[data-testid="startBtn"]').click()
      cy.get('.delete', { timeout: 20000 }).click()
      cy.contains('Success').should('be.visible');
    });
  });