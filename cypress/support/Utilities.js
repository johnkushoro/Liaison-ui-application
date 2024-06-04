import DataStore from "../../cypress/support/dataStore";


const dataStore = new DataStore();
Cypress.env('dataStore', dataStore);

const faker = require('faker');

class Utilities {

    getRandomEmail() {
        const randomString = Math.random().toString(36).substring(2, 15);
        return `${randomString}@example.com`;
    }

    getRandomFullName() {
        return faker.name.firstName() + ' ' + faker.name.lastName();
    }

    getRandomOrganizationName() {
        return faker.company.companyName();
    }

    waitForAjax() {
        cy.waitUntil(() =>
                cy.get('#ajaxStatusDiv').invoke('text').then((text) =>
                    text === ''),
            {
                errorMsg: "was expecting some other Value but got: ",
                timeout: 5000,
                interval: 500
            }
        );
    }
}

export default Utilities;
