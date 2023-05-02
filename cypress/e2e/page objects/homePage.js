import Urls from "./urls";

const inputHeader = '#inputs-header'
const checkboxHeader = '#checkbox-header'
const dropdownListHeader = '#dropdownlist-header'
const hoverHeader = '#hovers-header' 

class HomePage {
    clickInputTab() {
        cy.get(inputHeader).click()
    }

    clickCheckboxTab() {
        cy.get(checkboxHeader).click()
    }

    clickDropdownListTab() {
        cy.get(dropdownListHeader).click()
    }

    clickHoverTab() {
        cy.get(hoverHeader).click()
    }

    visitPage() {
        const url = new Urls()
        url.visitHomePage()
    }
}
export default HomePage;