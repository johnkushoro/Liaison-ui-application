import {When, Then} from "@badeball/cypress-cucumber-preprocessor";
import '../../support/commands';

import TopNav from "../page_objects/TopNav";

const topNav = new TopNav();


When(/^I hover over the "([^"]*)" navigation item and select "([^"]*)"$/, function (menuItem, dropdownText) {
    topNav.hoverOverNavItem(menuItem, dropdownText);
});

Then(/^I should be redirected to the "([^"]*)" page$/, function (pageTitle) {
    topNav.getH2PageTitle(pageTitle);
});

When(/^I click on the hamburger menu$/, function () {
    topNav.clickHamburgerMenu();
});
When(/^I navigate through "([^"]*)" \-> "([^"]*)" in the menu$/, function (currentMenuLink, detailedLinkTitle) {
    topNav.navigateMenu(currentMenuLink, detailedLinkTitle)
});
Then(/^I should be directed to the page associated with "([^"]*)"$/, function (pageTitle) {
    topNav.getH1PageTitle(pageTitle);
});

When(/^I click the top nav search icon and enter "([^"]*)" into the search field$/, function (searchText) {
    topNav.clickTopNavSearchIcon()
    topNav.topNavSearchMenu(searchText);
});

When(/^I click the submit search button$/, function () {
topNav.clickTopNavSearchSubmit();
});

Then(/^the page returns more than (\d+) results$/, function (minExpectedResults) {
    topNav.verifySearchResultsNotEmpty(minExpectedResults);
});
