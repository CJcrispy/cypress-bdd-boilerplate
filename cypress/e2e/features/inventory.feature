Feature: Login page

    Background:
        Given A user successfully logins in to saucelabs
    
    Scenario: Add 1 items to cart
        When A user adds "single" items to cart
        Then Shopping cart badge should be updated

    Scenario: Add some items to cart
        When A user adds "multiple" items to cart
        Then Shopping cart badge should be updated

    Scenario: Add all items to cart
        When A user adds "all" items to cart
        Then Shopping cart badge should be updated