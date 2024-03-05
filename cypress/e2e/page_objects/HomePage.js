import 'cypress-wait-until';
import 'cypress-real-events/support';
import { dataStore } from "../../support/dataStore";

export default class HomePage {
    static COOKIE_BANNER_BUTTON_SELECTOR = 'button.termly-styles-button-dd5ebb';
    static SECTOR_CARE_IMG_LOCATOR = '.sector-care img';
    static SECTOR_WORKFORCE_IMG_LOCATOR = '.sector-workforce img';
    static SECTOR_FINANCIAL_IMG_LOCATOR = '.sector-financial img';

    clickCookieBannerButtonByText(buttonText) {
        cy.get(HomePage.COOKIE_BANNER_BUTTON_SELECTOR)
            .contains(buttonText, { matchCase: false }).should('be.visible').click();
    }

    hoverOverSector(sectorName) {
        let selector;
        let readMoreButtonSelector;
        let envVariableName;
        switch(sectorName) {
            case 'sector-care':
                selector = HomePage.SECTOR_CARE_IMG_LOCATOR;
                readMoreButtonSelector = 'a.care';
                envVariableName = 'URL_LIAISON_CARE';
                break;
            case 'sector-workforce':
                selector = HomePage.SECTOR_WORKFORCE_IMG_LOCATOR;
                readMoreButtonSelector = 'a.workforce';
                envVariableName = 'URL_LIAISON_WORKFORCE';
                break;
            case 'sector-financial':
                selector = HomePage.SECTOR_FINANCIAL_IMG_LOCATOR;
                readMoreButtonSelector = 'a.financial';
                envVariableName = 'URL_LIAISON_FINANCIAL';
                break;
            default:
                cy.log('Sector not recognized');
                return;
        }

        const sectorUrl = Cypress.env(envVariableName);
        dataStore.setValue('readMoreButtonSelector', readMoreButtonSelector);
        dataStore.setValue('expectedUrl', sectorUrl); // Store the URL for verification later

        cy.get(selector).trigger('mouseover');
        cy.get(readMoreButtonSelector, {timeout: 10000}).should('be.visible');
    }

    clickReadMoreButton() {
        const readMoreButtonSelector = dataStore.getValue('readMoreButtonSelector');
        if (readMoreButtonSelector) {
            cy.get(readMoreButtonSelector, {timeout: 10000}).click({force: true});
        } else {
            cy.log('Read more button selector not found');
        }
    }

    verifyRedirection() {
        const expectedUrl = dataStore.getValue('expectedUrl');
        cy.url().should('eq', expectedUrl);
    }
}
