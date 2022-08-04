Feature: IFrames page tests

  Background:
    Given I navigate to url /IFrame/index.html
    And I am on IFrames page

  @iframe @smoke @regression
  Scenario: Home tab, click on Find Out More
    And I switch to iframe
    When I click on Find out more
    Then popup dialog window is displayed
    And I close the popup dialog

  @iframe @sanity @regression
  Scenario: Our Products
    And I switch to iframe
    When I click on navbar option Out Products
    Then Special Offers page is displayed
