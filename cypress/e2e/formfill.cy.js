describe('Página de Form Fill', () => {
    beforeEach(() => {
      cy.fixture('formdata').as('formData');
    });
  
    it('Debe agregar dos elementos al formulario', function() {
      cy.visit('https://thelab.boozang.com/formFill');
  
      this.formData.forEach((user) => {
        cy.get(':nth-child(1) > input').clear().type(user.firstName, { delay: 100 });
        cy.get(':nth-child(2) > input').clear().type(user.lastName, { delay: 100 });
        cy.get(':nth-child(3) > input').clear().type(user.email, { delay: 100 });
        cy.get(':nth-child(4) > input').clear().type(user.password, { delay: 100 });
        cy.get('.btn_section > .form_btn').click();
      });

      cy.get('.orange', { timeout: 20000 }).click();

      this.formData.forEach((user) => {
        cy.get('.print_form').should('contain', user.firstName);
        cy.get('.print_form').should('contain', user.lastName);
      });
    });
  });
  