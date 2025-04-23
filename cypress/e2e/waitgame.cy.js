describe('Página de Wait Game', () => {
    it('Debe marcar error', () => {
      cy.visit('https://thelab.boozang.com/waitGame');  
      cy.get('[data-testid="startBtn"]').click()
      cy.get('.delete').click()
      cy.contains('Try again!').should('be.visible');
    });
    it('Debe marcar exitoso', () => {
      cy.visit('https://thelab.boozang.com/waitGame');  
      cy.get('[data-testid="startBtn"]').click()
      cy.wait(5000);
      cy.get('.delete').click()
      cy.contains('Success!').should('be.visible');
    });
  });