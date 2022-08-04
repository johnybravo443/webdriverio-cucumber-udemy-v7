Feature: webdriver university - contact us page

  Background:
    Given I navigate to url /Contact-Us/contactus.html
    And I am on ContactUs page

  @contactus @smoke @sanity @regression
  Scenario: valid submission - submit all information
    And I enter the following contact details
      | firstName | lastName  | email             | comments    |
      | John      | Man       | johnman@gmail.com | this is it  |
    When I click on submit
    Then The form is submitted successfully

  @contactus @smoke @regression
  Scenario: invalid submission - email missing
    And I enter the following contact details
      | firstName | lastName  | comments    |
      | John      | Man       | this is it  |
    When I click on submit
    Then The form is not submitted successfully

  @contactus @regression
  Scenario: invalid submission - anything other than email missing
    And I enter the following contact details
      | firstName | email             | comments    |
      | John      | johnman@gmail.com | this is it  |
    When I click on submit
    Then The form is not submitted successfully

  @contactus @regression
  Scenario: invalid submission - anything other than email missing 1
    And I enter the following contact details
      | firstName | email             | comments    |
      | John      | johnman@gmail.com | this is it  |
    When I click on submit
    Then Unsuccessful submission error message is displayed