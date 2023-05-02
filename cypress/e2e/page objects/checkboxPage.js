const checkbox = 'input[type="checkbox"]'

class  CheckboxPage {
    checkFirstCheckbox() {
        cy.get(checkbox).first().check().should('be.checked')
    }

    uncheckSecondCheckbox() {
        cy.get(checkbox).last().uncheck().should('not.be.checked')
    }
}
export default CheckboxPage;