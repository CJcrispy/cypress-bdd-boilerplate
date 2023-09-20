Feature: Login page

    Background:
        Given A user successfully logins in to saucelabs
    
    Scenario: Add Products to cart
        When A user adds "multiple" item(s) to cart
        Then verify