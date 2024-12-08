describe('Shopee Website - Home Page', () => {
  it('Land on Shopee homepage with English language', () => {
    // Visit Shopee website
    cy.visit('https://shopee.co.th');

    cy.get(':nth-child(2) > .shopee-button-outline')
      .contains('English')
      .should('be.visible')
      .click();
  });
});

