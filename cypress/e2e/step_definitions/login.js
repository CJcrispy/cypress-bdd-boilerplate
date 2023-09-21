import {
    Given,
    When,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";
import {loginPage} from '@pages/LoginPage'
import { common } from "@pages/Common";
  
Given("A web browser is at the saucelabs login page", () => {
    cy.visit("/");
});

When("A user enters the username {string}, the password {string}, and clicks on the login button", (username,password) => {
    loginPage.submitLogin(username,password)

});

When("A user provides incorrect credentials, and clicks on the login button", (table) => {
    table.hashes().forEach((row) => {
        cy.log(row.username);
        cy.log(row.password);
        loginPage.submitLogin(row.username, row.password)

    });
});

When("A user clicks on the menu and selects {string}", (menuItem) => {
    common.menuSelection(menuItem);
});

Then("the url will contains the {string} subdirectory", (pagePath) => {
    common.verifyUrl(pagePath);
});

Then("The error message {string} is displayed", (errorMessage) => {
    loginPage.elements.errorMessage().should("have.text", errorMessage);
});

Then("verify the url is the saucedemo login page", () => {
    cy.url().should("contains", "/");
});