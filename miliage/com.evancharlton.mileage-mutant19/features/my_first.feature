Feature: Historicos

  Scenario: Como un usuario quiero ver los historicos   
    When I press "History"    
    Then I should see "12/11/19"

Feature: Fillup

  Scenario: Como un usuario quiero llenar el tanque   
    Given I press "Fillup"
    When I enter text "10000" into field with id "price"
    And I enter text "9" into field with id "gallons"
    And I enter text "3" into field with id "odometer"
    And I press the "Save Fillup" button
    Then I should see "12/11/19"

  Scenario: Como un usuario quiero validar campos obligatorios
    Given I press "Fillup"
    When I enter text "10000" into field with id "price"    
    And I enter text "3" into field with id "odometer"
    And I press the "Save Fillup" button
    Then I should see "Invalid value for volume"

Feature: Vehicles
  Scenario: Como un usuario quiero agregar un vehiculo
    Given I press "Vehicles"
    When I press the "Default vehicle" button
    And I enter text "carro base" into field with id "Title"
    And I press the "Save changes" button
    Then I should see "carro base"

  Scenario: Como un usuario quiero validar campo obligatorio
    Given I press "Vehicles"
    When I press the "Default vehicle" button
    And I enter text "" into field with id "Title"
    And I press the "Save changes" button
    Then I should see "Invalid vehicle title"
