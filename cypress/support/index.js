// Cypress.on('uncaught:exception', (err, runnable) => {
//     // return false to prevent Cypress from failing the test
//     if (err.message.includes('missing drag target') || err.message.includes('missing draggable element')) {
//         return false;
//     }
// });
//
// Cypress.on('uncaught:exception', (err, runnable) => {
//     // return false to prevent Cypress from failing the test
//     if (err.message.includes('Cannot read properties of null (reading \'getList\')')) {
//         return false;
//     }
// });



// cypress/support/index.js

const secureConfig = require('../../config/secure-config');

Cypress.on('uncaught:exception', (err, runnable) => {
    if (err.message.includes('missing drag target') || err.message.includes('missing draggable element')) {
        return false;
    }
});

Cypress.on('uncaught:exception', (err, runnable) => {
    if (err.message.includes('Cannot read properties of null (reading \'getList\')')) {
        return false;
    }
});

// Add any relevant setup scripts or configurations here
if (secureConfig.enableStrictMode) {
    'use strict';
}

// Example of logging the configuration (can be removed)
console.log('Secure Configuration:', secureConfig);

