Feature: Top Banner Navigation

  Background:
    Given I am on the homepage of "LIAISON_APPLICATION"

  Scenario: Validate Functionality of Top Banner Drop-down Navigation
    When I hover over the "Integrated Care Systems" navigation item and select "ICS Regions"
    Then I should be redirected to the "ICS Regions" page

  Scenario: Navigate to a Page via Hamburger Menu
    When I click on the hamburger menu
    And I navigate through "Liaison Workforce" -> "Workforce Platform" in the menu
    Then I should be directed to the page associated with "Workforce Platform"

  Scenario: Validate Accuracy of Top Banner Search Functionality
    When I click the top nav search icon and enter "NHS At Work Rota & Roster" into the search field
    And I click the submit search button
    Then the page returns more than 1 results

