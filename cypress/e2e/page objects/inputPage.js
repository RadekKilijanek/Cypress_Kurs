const input = 'input[type="number"]'


class InputPage {
    typeNumberIntoField(value) {
        cy.get(input).clear()
        cy.get(input).type(value).should('have.value', value)
    }

    typeLetterIntoField() {
        cy.get(input).clear(
            cy.get(input).type('aaa').should('not.have.value', 'aaa')
        )
    }
}
export default InputPage;