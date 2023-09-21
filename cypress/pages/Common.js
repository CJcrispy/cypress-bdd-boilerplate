class Common {
    elements = { 
        menubtn: () => cy.get('#react-burger-menu-btn'),
    }

    menuSelection(menuItem) {
        this.elements.menubtn().click();

        switch(menuItem) {
            case "logout":
                cy.get('a').contains("Logout").click();
        }
    }

    verifyUrl(pagePath){
        cy.url().should("include", pagePath);
    }
}
   

export const common = new Common();