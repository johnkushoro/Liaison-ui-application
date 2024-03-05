Feature: Application Functionality Verification
  Background:
Given I am on the homepage of "LIAISON_APPLICATION"

  Scenario: Verify Read More Navigation for the Care Sector
    When I move the cursor over the navigation item labeled "sector-workforce"
    And I click on the Read More button
    Then I should be redirected to the page url











