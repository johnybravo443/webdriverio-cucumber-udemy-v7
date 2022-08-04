Feature: Popup and alerts

  Background:
    Given I navigate to url /Popup-Alerts/index.html
    And I am on popup alerts page

  @popupalerts @smoke @regression
  Scenario: Javascript alert test
    When I click on JavaScript Alert button
    And The alert is open
    Then I accept the alert
    And The alert is closed

  @popupalerts @sanity @regression
  Scenario: model popup test
    When I click on Model Popup button
    Then The Model Popup is open
    And I close the Model Popup window

  @popupalerts @regression
  Scenario: Javascript confirm box test when you accept it
    When I click on JavaScript Confirm Box button
    Then The Confirm Box is open
    And I accept the alert
    Then the correct confirm alert text is displayed on the UI

  @popupalerts @regression
  Scenario: Javascript confirm box test when you cancel it
    When I click on JavaScript Confirm Box button
    Then The Confirm Box is open
    And I dismiss the alert
    Then the correct cancel alert text is displayed on the UI

