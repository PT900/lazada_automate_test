// Disable uncaught exception
Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

