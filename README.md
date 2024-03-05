
# Liaison Application Cypress Test Suite

**Version:** 2.2.0

**Description:** This comprehensive Cypress test suite is designed to facilitate automation testing across various functionalities of the Liaison Application. It leverages the power of Cucumber for writing readable test scenarios.

## Usage

### Scripts

- `cypress:runner`: Launches the Cypress Test Runner in Chrome for interactive testing.
- `cypress:runner`:headed: Executes tests in a headful (non-headless) Chrome browser.
- `cypress:execution`: Runs all tests specified in the cypress/e2e/features/* directory.
- `cypress:parallel`: Executes tests in parallel, enhancing test execution speed.
- `cypress:run`:homePageTest, cypress:run:topNav, cypress:run:footerSubscriptionForm: These scripts target specific feature tests, such as home page navigation, top banner navigation, and footer subscription form functionality, respectively, with results outputting through a custom 

## HTML report.
## Key Components
- DataStore (cypress/e2e/dataStore.js): Facilitates data storage and retrieval across tests, ensuring data consistency and reuse.
- Utilities (cypress/support/Utilities.js): A utility class offering common functionalities like generating random data for test inputs.
- Page Objects (e.g., FooterSubscriptionForm, HomePage, TopNav): Encapsulate methods and selectors for interacting with the application, promoting code reuse and reducing maintenance.

# Step Definitions and Features

The test suite employs Cucumber's Gherkin syntax to define test scenarios in a readable format. Step definitions in cypress/e2e/step_definitions/ map these scenarios to executable code, utilizing the utilities and page objects for interacting with the application.

Example Scenarios

- Footer Subscription Form Functionality: Tests the footer's subscription form by entering details and validating the submission confirmation.
- Top Banner Navigation: Verifies navigation through the top banner's dropdown menus and search functionality.
- Read More Navigation: Validates redirection to detailed pages from "Read More" links in various sections of the application.

## Configuration
- .env: Contains environment variables for URLs and other global settings.
- cypress.config.js: Configures Cypress, including plugins like the Cucumber preprocessor and Allure for reporting.
- package.json: Lists dependencies, including Cypress, Cucumber, and various utilities, and defines runnable scripts for testing.

Running the Tests

- Ensure dependencies are installed by running npm install.
- Execute tests via npm run scripts, such as npm run cypress:runner for interactive testing or npm run cypress:execution for a full test suite run.

**Author**

**Cucumber**

**License**

**ISC License**

This test suite is an essential tool for QA teams seeking to automate their testing processes for the Liaison Application, ensuring comprehensive coverage and efficient testing cycles.




