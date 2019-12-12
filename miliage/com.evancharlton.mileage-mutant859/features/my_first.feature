Feature: Login feature

  Scenario: Como un usuario quiero ver la opcion registro de nuevos usuarios   
    When I enter text "12345asf" into field with id "price"
    And I press view with id "save_btn"
    Then I should see "Invalid value for volume"