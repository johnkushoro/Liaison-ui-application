import {When, Then} from "@badeball/cypress-cucumber-preprocessor";
import '../../support/commands';
import Utilities from "../../support/Utilities";
import {dataStore} from "../../support/dataStore";
import FooterSubscriptionForm from "../page_objects/FooterSubscriptionForm";

const utilities = new Utilities();
const footerSubscriptionForm = new FooterSubscriptionForm();


When('I complete the form with the following details:', function (dataTable) {

    const data = dataTable.hashes()[0];
    const randomFullName = utilities.getRandomFullName();
    const randomEmail = utilities.getRandomEmail();
    const randomOrganizationName = utilities.getRandomOrganizationName();

    dataStore.setValue("storedRandomFullName", randomFullName);

    footerSubscriptionForm.formsDetailsInputField('Full Name', randomFullName);
    footerSubscriptionForm.formsDetailsInputField('Email', randomEmail);
    footerSubscriptionForm.formsDetailsInputField('Organisation', randomOrganizationName);
});

When(/^I click on the Submit button$/, function () {
    footerSubscriptionForm.clickFormSubmitButton();
    cy.checkForCaptcha();
});
Then(/^I should see a confirmation message "([^"]*)"$/, function (expectedMessage) {
    footerSubscriptionForm.successfulSubscriptionDisplayMsg(expectedMessage);
});
