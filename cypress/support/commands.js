// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import './commands';

Cypress.Commands.add('clickAndOpenLink_InSameTab', (selector) => {
    cy.get(selector).invoke('removeAttr', 'target').click({force: true});
});


Cypress.Commands.add('openNewTabWithUrl', () => {
    cy.window().then(win => {
        const newTabUrl = win.location.href;
        cy.visit(newTabUrl);
    })
});


Cypress.Commands.add('checkForCaptcha', () => {
    cy.get('body').then((body) => {
        if (body.find('.rc-anchor').length > 0) {
            cy.log('CAPTCHA detected');
        }
    });
});