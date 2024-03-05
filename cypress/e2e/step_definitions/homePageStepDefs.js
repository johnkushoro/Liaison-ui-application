import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";
import '../../support/commands';
import HomePage from "../page_objects/HomePage";

const homePage = new HomePage();

Given(/^I am on the homepage of "([^"]*)"$/, function (urlParameter){
    const baseUrl = Cypress.env(urlParameter);
    if (!baseUrl) {
        throw new Error(`The ${urlParameter} environment variable is not set.`);
    }
    cy.visit(baseUrl);
    homePage.clickCookieBannerButtonByText('Accept')
});

When(/^I move the cursor over the navigation item labeled "([^"]*)"$/, function (optionText) {
    homePage.hoverOverSector(optionText);
});
When(/^I click on the Read More button$/, function () {
    homePage.clickReadMoreButton()
});
Then(/^I should be redirected to the page url$/, function () {
    homePage.verifyRedirection()
});
