class InventoryPage {
    ProductsToCartButtons = {
        sauceLabBackpackToCart: () => cy.get('[data-test="add-to-cart-sauce-labs-backpack"]'),
        sauceLabBikeToCart: () => cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]'),
        sauceLabTshirtToCart: () => cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]'),
        sauceLabFleceToCart: () => cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]'),
        sauceLabOnesieToCart: () => cy.get('[data-test="add-to-cart-sauce-labs-onesie"]'),
        sauceLabTestToCart: () => cy.get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]')
    }

    elements = {
        productfilter:() => cy.get('[data-test="product_sort_container"]'),
        shoppingCartLink: () => cy.get('.shopping_cart_link'),
    }


    selectItem(amount) {
        switch(amount){
            case "single":
                const randomIndex = Math.floor(Math.random() * Object.keys(this.ProductsToCartButtons).length);
                const randomElement = Object.values(this.ProductsToCartButtons)[randomIndex];
                randomElement().click();
                break;

            case "multiple":
                const numRandomElements = Math.floor(Math.random() * Object.keys(this.ProductsToCartButtons).length) + 1;
                const randomIndices = [];

                while (randomIndices.length < numRandomElements) {
                    const randomIndex = Math.floor(Math.random() * Object.keys(this.ProductsToCartButtons).length);
                    if (!randomIndices.includes(randomIndex)) {
                        randomIndices.push(randomIndex);
                    }
                }

                randomIndices.forEach((index) => {
                    const randomElement = Object.values(this.ProductsToCartButtons)[index];
                    randomElement().click();
                });
                break;

            case "all":
                Object.values(this.ProductsToCartButtons).forEach((element) => {
                    element().click();
                });
                break;
        }
    }

    calculateNumberOfButtonsClicked(badgeText) {
        let removeButtonCount = 0;

        cy.get('div.inventory_list').find('button').each(($button) => {
            cy.wrap($button).invoke('text').then((buttonText) => {
                const trimmedText = buttonText.trim(); // Trim whitespace
          
                if (trimmedText === 'Remove') {
                  removeButtonCount++;
                }
          
                cy.log('Button Text:', trimmedText);
              });
        })
        .then(() => {
            expect(badgeText).to.eq(String(removeButtonCount));
          });

    }

    verifyShoppingCartBadge() {
        cy.get('div.shopping_cart_container').should('be.visible')
        .find('a.shopping_cart_link')
        .should('be.visible')
        .find('span.shopping_cart_badge')
        .invoke('text')
        .then((badgeText) => {
            this.calculateNumberOfButtonsClicked(badgeText)
        });
    }
    
}

export const inventoryPage = new InventoryPage();