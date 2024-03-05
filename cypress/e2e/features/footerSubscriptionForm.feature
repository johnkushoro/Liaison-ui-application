Feature: Verify Footer Subscription Form Functionality

  Background:
    Given I am on the homepage of "LIAISON_APPLICATION"

  Scenario Outline: Subscribe to Health Sector Updates via Footer Form
    When I complete the form with the following details:
      | Full Name   | Email address  | Organisation   |
      | <Full Name> | <Email address> | <Organisation> |

    And I click on the Submit button
    Then I should see a confirmation message "Thank you for subscribing!"

    Examples:
      | Full Name      | Email address | Organisation |
      | StoredFullName | storedEmail   | StoreCompany |