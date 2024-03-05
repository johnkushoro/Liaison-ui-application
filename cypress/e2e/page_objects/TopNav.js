
export default class TopNav {
    static NAV_LINKS = 'a.text-xs, a.text-black';
    static H2_TEXT_LOCATOR = (textContent) => `h2:contains("${textContent}")`;
    static H1_TEXT_LOCATOR = (textContent) => `h1:contains("${textContent}")`;
    static HAMBURGER_MENU = 'nav > div > div > div:nth-child(3) > div:nth-child(2) > button:nth-child(1)';
    static TOP_NAV_SEARCH_ICON = 'nav > div > div > div:nth-child(3) > div:nth-child(2) > button:nth-child(2)';
    static CURRENT_MENU_ELEMENT = '.text-4xl';
    static SUB_MENU_ELEMENT = '.text-xl';
    static TOP_NAV_SEARCH_FIELD = 'nav > div:nth-child(7) > div:nth-child(2) > div:nth-child(2) > div > form > div > input';
    static TOP_NAV_SEARCH_SUBMIT_BUTTON = 'body > nav:nth-child(2) > div:nth-child(7) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > form:nth-child(2) > button:nth-child(3)';
    static PAGINATION_LINKS_SELECTOR = 'div > a[href*="page"]';


    hoverOverNavItem(mainLinkText, finalClickText) {
        cy.contains(TopNav.NAV_LINKS, mainLinkText).trigger('mouseover');

        cy.contains(finalClickText, {matchCase: false})
            .should('exist')
            .click({force: true});
    }

    getH2PageTitle(expectedMessage) {
        return cy.get(TopNav.H2_TEXT_LOCATOR(expectedMessage)).invoke('text').then((text) => {
            expect(text.trim()).to.eq(expectedMessage);
        });
    }

    getH1PageTitle(expectedMessage) {
        return cy.get(TopNav.H1_TEXT_LOCATOR(expectedMessage)).invoke('text').then((text) => {
            expect(text.trim()).to.eq(expectedMessage);
        });
    }
    clickHamburgerMenu() {
        cy.get(TopNav.HAMBURGER_MENU).click();
    }

    clickTopNavSearchIcon() {
        cy.get(TopNav.TOP_NAV_SEARCH_ICON).click();
    }

    navigateMenu(currentMenuLink, detailedLinkTitle) {
        cy.contains(TopNav.CURRENT_MENU_ELEMENT, currentMenuLink).click();

        cy.contains(TopNav.SUB_MENU_ELEMENT, detailedLinkTitle).click();
    }

    topNavSearchMenu(searchText) {
        cy.get(TopNav.TOP_NAV_SEARCH_FIELD).should('be.visible').click().clear().type(searchText);
    }

    clickTopNavSearchSubmit() {
        cy.get(TopNav.TOP_NAV_SEARCH_SUBMIT_BUTTON).click();
    }

    verifySearchResultsNotEmpty(minExpectedResults) {
        cy.get(TopNav.PAGINATION_LINKS_SELECTOR, { timeout: 10000 })
            .should('have.length.greaterThan', minExpectedResults);
    }

}

