Feature: The Internet Guinea Pig Website two

  Scenario: login with correct credentials and see valid intro message
    Given I am on the login page
    When I login with following user detail
      | username  | password              |
      | tomsmith  | SuperSecretPassword!  |
    Then I should see a flash message saying You logged into a secure area!

  Scenario: login with wrong credentials and see invalid intro message
    Given I am on the login page
    When I login with details
      | username  | yoyo  |
      | password  | yoyo!  |
    Then I should see a flash message saying You logged into a secure area!