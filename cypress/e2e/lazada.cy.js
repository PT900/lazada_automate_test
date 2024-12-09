describe('Enter Shopee website, landing on home page with EN lang', () => {
  beforeEach(() => {
    // Visit Lazada website
    cy.visit('https://lazada.co.th');

    // Bypass captcha (enable when captcha is activate)
    cy.get('body').then(($body) => {
      if ($body.find('.baxia-dialog.auto').length) {
        cy.get('.baxia-dialog.auto').then(($el) => {
          $el.remove();
        });
      }
    });
  });

  it('Land on Shopee homepage with English language', () => {
    cy.get('#topActionSwitchLang').click();
    cy.get('#topActionSwitchLang').click();

    // Check language
    // cy.get('.top-popup-content.lzd-switch-content').find('div').each(($el) => {
    //   if ($el.hasClass('currentSelected')) {
    //     const lang = $el.attr('data-lang');
    //
    //     if (lang === 'en') {
    //       cy.get('#topActionSwitchLang').click();
    //     }
    //     else if (lang === 'th') {
    //       cy.get('.lzd-switch-item.currentSelected').click();
    //     }
    //   }
    // });
  });
  it('Land on Shopee homepage with Thai language and switch to English', () => {
    cy.get('#topActionSwitchLang').click();

    // Check language
    cy.get('.top-popup-content.lzd-switch-content').find('div').each(($el) => {
      if ($el.hasClass('currentSelected')) {
        const lang = $el.attr('data-lang');

        if (lang === 'en') {
          cy.get('#topActionSwitchLang').click();
        }
        else if (lang === 'th') {
          cy.get('.lzd-switch-item.currentSelected').click();
        }
      }
    });
  });
});

describe('Search for keywords "baby toys"', () => {
  beforeEach(() => {
    // Visit Lazada website
    cy.visit('https://lazada.co.th');

    // Bypass captcha (enable when captcha is activate)
    cy.get('body').then(($body) => {
      if ($body.find('.baxia-dialog.auto').length) {
        cy.get('.baxia-dialog.auto').then(($el) => {
          $el.remove();
        });
      }
    });
  });

  it('Enter search bar and Enter', () => {
    cy.get('#q').type('baby toys{enter}');

    // Bypass captcha (enable when captcha is activate)
    cy.get('body').then(($body) => {
      if ($body.find('.J_MIDDLEWARE_FRAME_WIDGET').length) {
        cy.get('.J_MIDDLEWARE_FRAME_WIDGET').then(($el) => {
          $el.remove();
        });
      }
    });
  });
  it('Enter search bar and click search button', () => {
    cy.get('#q').type('baby toys');
    cy.get('.search-box__button--1oH7').click();

    // Bypass captcha (enable when captcha is activate)
    cy.get('body').then(($body) => {
      if ($body.find('.J_MIDDLEWARE_FRAME_WIDGET').length) {
        cy.get('.J_MIDDLEWARE_FRAME_WIDGET').then(($el) => {
          $el.remove();
        });
      }
    });
  });
});

describe('Website display search result as a list', () => {
  beforeEach(() => {
    // Visit Lazada website
    cy.visit('https://lazada.co.th');

    // Bypass captcha (enable when captcha is activate)
    cy.get('body').then(($body) => {
      if ($body.find('.baxia-dialog.auto').length) {
        cy.get('.baxia-dialog.auto').then(($el) => {
          $el.remove();
        });
      }
    });
  });

  it('Select search result as a list', () => {
    cy.get('#q').type('baby toys{enter}');

    // Bypass captcha (enable when captcha is activate)
    cy.get('body').then(($body) => {
      if ($body.find('.J_MIDDLEWARE_FRAME_WIDGET').length) {
        cy.get('.J_MIDDLEWARE_FRAME_WIDGET').then(($el) => {
          $el.remove();
        });
      }
    });

    cy.get('[data-spm-click="gostr=/lzdse.result.list_grid;locaid=list"] > .lzd-search-common-icon').click();
  });
});
