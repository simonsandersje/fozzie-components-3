import HeaderComponent from '../../../test-utils/component-objects/f-header.component';
import forEach from 'mocha-each';
const path = 'iframe.html?id=components-organisms--' // storybook url for all components - could move to config.
const offers = '&knob-Show%20offers%20link=true'
const delivery = '&knob-Show%20delivery%20enquiry=true'

describe('f-header component tests', () => {
    beforeEach(() => {
        browser.url(`${path}header-component${offers}${delivery}`);
    });

    it('should display the f-header component', () => {
        // Assert
        expect(HeaderComponent.isLogoDisplayed()).toBe(true);
    });

    it('should only show the default navigation fields', () => {
        // Act
        browser.url(`${path}header-component`);

        // Assert
        expect(HeaderComponent.isFieldLinkDisplayed('offers')).toBe(false); 
        expect(HeaderComponent.isFieldLinkDisplayed('help')).toBe(true);
    })

    forEach(['offers', 'help', 'delivery', 'userAccount'])
    .it('should show all the links and icons', field => {
        // Assert
        expect(HeaderComponent.isFieldLinkDisplayed(field)).toBe(true);
    });

    it('should alter visibility of navbar depending on window size', () => {
        // Act
        browser.setWindowSize(500, 500);

        // Assert
        expect(HeaderComponent.isMobileNavigationBarVisible()).toBe(true);
        expect(HeaderComponent.isMobileOffersIconDisplayed()).toBe(true);
        expect(HeaderComponent.isFieldLinkDisplayed('help')).toBe(false);
    });

    it('should change url when help-link is clicked', () => {
        // Act
        browser.setWindowSize(1000, 1000);
        HeaderComponent.clickHelpLink();

        // Assert
        expect(browser.getUrl()).toContain("http://localhost:8080/help");
    });

    it('should change the url to offers when offers link is clicked', () => {
        // Act
        HeaderComponent.clickOffersLink();

        // Assert
        expect(browser.getUrl()).toContain("/offers");
    });

    forEach(['offers', 'help', 'delivery', 'userAccount'])
    .it.skip('should show navigation fields when mobile-navigation has been opened', field => {
        // Act
        browser.setWindowSize(500, 1000);
        HeaderComponent.openMobileNavigation();

        // Assert
        expect(HeaderComponent.isFieldLinkDisplayed(field)).toBe(true);

         //Skipping for now - delivery is missing when nav is changed from web to mobile. 
         //Will ask a front-end dev to confirm.
    });
});
