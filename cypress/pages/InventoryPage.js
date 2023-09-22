class InventoryPage {
    ProductsToCartButtons = {
        sauceLabBackpackToCart: () => cy.get('[data-test="add-to-cart-sauce-labs-backpack"]'),
        sauceLabBikeToCart: () => cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]'),
        sauceLabTshirtToCart: () => cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]'),
        sauceLabFleceToCart: () => cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]'),
        sauceLabOnesieToCart: () => cy.get('[data-test="add-to-cart-sauce-labs-onesie"]'),
        sauceLabTestToCart: () => cy.get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]')
    }

    elements = {
        productfilter:() => cy.get('[data-test="product_sort_container"]'),
        shoppingCartLink: () => cy.get('.shopping_cart_link'),
    }
}

export const inventoryPage = new InventoryPage();