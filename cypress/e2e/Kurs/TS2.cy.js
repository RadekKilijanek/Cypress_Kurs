import InputPage from "../page objects/inputPage"
import HomePage from "../page objects/homePage"
import CheckboxPage from "../page objects/checkboxPage"
import DropdownListPage from "../page objects/dropdownListPage"
import HoversPage from "../page objects/hoversPage"

describe('test input', () => {

    beforeEach(() => {
        cy.visit('/');
    }) 
    it('input test', function() {
        const homePage = new HomePage();
        homePage.clickInputTab()

        const inputPage = new InputPage();
        inputPage.typeNumberIntoField(123)
        inputPage.typeLetterIntoField()
    })

    it('checkbox test', function() {
        const homePage = new HomePage();
        homePage.clickCheckboxTab()

        const checkboxPage = new CheckboxPage();
        checkboxPage.checkFirstCheckbox()
        checkboxPage.uncheckSecondCheckbox( )
    })

    it('dropdown test', function() {
        const homePage = new HomePage();
        homePage.clickDropdownListTab()

        const dropdownPage = new DropdownListPage();
        dropdownPage.chooseDropdownListFirstOption()
    })

    it('test hover', function() {
        const homePage = new HomePage();
        homePage.clickHoverTab()

        const hoverPage = new HoversPage();
        hoverPage.hoverOverElement()
    })
})