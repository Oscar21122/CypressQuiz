describe('Página de Yellow or Blue', () => {
  it('Debe marcar exitoso', () => {
    cy.visit('https://thelab.boozang.com/yellowOrBlue');  
    cy.get('.form_btn').click();
    cy.get('.color').then($color => {
      if ($color.text().trim() === 'blue') {
        cy.get('.blue').click();
      } else {
        cy.get('.yellow').click();
      }
    });
    cy.contains('Success!').should('be.visible');
  });

  it('Debe marcar error', () => {
    cy.visit('https://thelab.boozang.com/yellowOrBlue');  
    cy.get('.form_btn').click();
    cy.get('.color').then($color => {
      if ($color.text().trim() === 'blue') {
        cy.get('.yellow').click();
      } else {
        cy.get('.blue').click();
      }
    });
    cy.contains('Try again!').should('be.visible');
  });
});
