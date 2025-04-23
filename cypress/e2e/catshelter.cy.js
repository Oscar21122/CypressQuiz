describe('Página de Cat Shelter', () => {
    beforeEach(() => {
      cy.fixture('cats').as('catsData');
    });
  
    it('Debe agregar dos gatos y asignarles hogar', function() {
      cy.visit('https://thelab.boozang.com/catShelter');

      this.catsData.forEach((cat) => {
        cy.get('.cat_shelter_header > .link_btn').click()
        cy.get('.list_form > :nth-child(1) > input').clear().type(cat.name, { delay: 100 });
        cy.get('textarea').clear().type(`${cat.name} is a good cat`, { delay: 100 })
        cy.get('.text-center > .form_btn', { timeout: 20000 }).click();
      });
  
      cy.get('.collection').should('contain', 'Michi');
      cy.get('.collection').should('contain', 'Bigotes');
    });
  });
  