describe('Página de Concatenate Strings', () => {
    it('Debe concatenar dos cadenas de texto', () => {
      cy.visit('https://thelab.boozang.com/concatStrings');
      
  
      cy.get('.strings_section > :nth-child(2)').click();
      cy.get('.string1').invoke('text').then((text) => {
        cy.get('input').type(text, { delay: 100 });
      });
      cy.get('.string2').invoke('text').then((text) => {
        cy.get('input').type(text, { delay: 100 });
      });      
      cy.get('.text-center > .form_btn').click();
      cy.contains('Success!').should('be.visible');
    });
    it('Texto Random', () => {
      cy.visit('https://thelab.boozang.com/concatStrings');
      
      cy.get('.strings_section > :nth-child(2)').click();
      cy.get('input').type("RaNdOMtExT", { delay: 100 });
      cy.get('.text-center > .form_btn').click();
      cy.contains('Try again!').should('be.visible');
    });
  });
  