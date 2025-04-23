describe('Página de Sorted List', () => {
    it('Debe agregar dos elementos a la lista', () => {
      cy.visit('https://thelab.boozang.com/sortedList');
      
      cy.get('input').clear().type('Objeto 1', { delay: 100 });
      cy.get('.form_btn', { timeout: 20000 }).click(); 
      cy.contains('.collection', 'Objeto 1').should('exist');
      
      cy.get('input').clear().type('Objeto 2', { delay: 100 });
      cy.get('.form_btn', { timeout: 20000 }).click(); 
      cy.contains('.collection', 'Objeto 2').should('exist');
    });
  });
  