Feature: Dropdown, checkbox and radiobutton tests

  Background:
    Given I navigate to url /Dropdown-Checkboxes-RadioButtons/index.html
    And I am on dropdown menu, checkboxes and radio buttons page

  @dropdownradiocheckbox @smoke @regression
  Scenario: Choose values from a dropdown one, two and three
    And I select Python from dropdown one
    And I select JUnit from dropdown two
    And I select CSS from dropdown three

  @dropdownradiocheckbox @sanity @regression
  Scenario: select a checkbox
    When I select checkbox Option 1
    Then Checkbox Option 1 is checked
    When I select checkbox Option 2
    Then Checkbox Option 2 is checked
    When I select checkbox Option 3
    Then Checkbox Option 3 is unchecked
    When I select checkbox Option 4
    Then Checkbox Option 4 is checked

  @dropdownradiocheckbox @regression
  Scenario: select a radiobutton
    When I select radiobutton Green
    Then Radiobutton Green is checked
    When I select radiobutton Yellow
    Then Radiobutton Yellow is checked
    When I select radiobutton Purple
    Then Radiobutton Purple is checked