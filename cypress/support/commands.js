Cypress.Commands.add('clearFirebaseAuth', () => {
  indexedDB.deleteDatabase('firebaseLocalStorageDb');
});

Cypress.Commands.add('login', (email, password) => {
  cy.visit('/');
  cy.get('form').get('h1.firebaseui-title');

  cy.get('input[name="email"]')
    .type(email)
    .should('have.value', email);

  cy.get('button[type="submit"]').click();

  cy.get('input[name="password"]')
    .type(password)
    .should('have.value', password);

  cy.get('button[type="submit"]').click();
});

Cypress.Commands.add('logout', () => {
  cy.visit('/');
  cy.get('h1.firebaseui-title').should('not.exist');

  cy.get('h6:contains(Settings)').click();
  cy.get('button:contains(Sign Out)').click();
});

Cypress.Commands.add('loginAdminUser', () => {
  cy.clearFirebaseAuth();
  cy.fixture('users/admin.json')
    .as('user')
    .then(user => {
      cy.login(user.email, user.password);
    });
});
