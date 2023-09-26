import {
    Given,
    When,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";
import {loginPage} from '@pages/LoginPage';
import { common } from "@pages/Common";
import { inventoryPage } from "@pages/InventoryPage";

Given("A user successfully logins in to saucelabs", () => {
  cy.visit("/");
  loginPage.submitLogin("standard_user", "secret_sauce")
});

When("A user adds {string} items to cart", (amount) => {
  inventoryPage.selectItem(amount);
});

Then("Shopping cart badge should be updated", () => {
  inventoryPage.verifyShoppingCartBadge();
});