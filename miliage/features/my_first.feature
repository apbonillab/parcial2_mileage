Feature: Login feature

  Scenario: As a valid user I can log into my app
  When  I press view with id "com.evancharlton.mileage:id/price"
    Then I enter input "12345aqs" into "Price per Gallons"
    Then I see "Invalid value for volume"
