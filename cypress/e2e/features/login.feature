Feature: Login page

    Background:
        Given A web browser is at the saucelabs login page
        
    Scenario: Successful Login
        When A user enters the username "standard_user", the password "secret_sauce", and clicks on the login button
        Then the url will contains the "inventory" subdirectory

    Scenario: Blocked Login
        When A user enters the username "locked_out_user", the password "secret_sauce", and clicks on the login button
        Then The error message "Epic sadface: Sorry, this user has been locked out." is displayed

    Scenario: Incorrect Username Login
        When A user provides incorrect credentials, and clicks on the login button
            | username | password     |
            | testName | secret_sauce |
        Then The error message "Epic sadface: Username and password do not match any user in this service" is displayed

    Scenario: Incorrect Password Login
        When A user provides incorrect credentials, and clicks on the login button
            | username      | password     |
            | standard_user | testPassword |
        Then The error message "Epic sadface: Username and password do not match any user in this service" is displayed

    Scenario: Login and Logout
        When A user enters the username "standard_user", the password "secret_sauce", and clicks on the login button
        And A user clicks on the menu and selects "logout"
        Then verify the url is the saucedemo login page