import "cypress-localstorage-commands"

describe('my first scenario', () => {
    it('visit main page and click top menu button', function(){
        cy.visit('https://fabrykatestow.pl')

        cy.get('#nv-primary-navigation-main').contains('Newsletter').click()
        cy.url().should('eq', 'https://fabrykatestow.pl/ciekawostki/')
    })
})

const url = 'http://simpletestsite.fabrykatestow.pl/'
const iframeHeader = '#iframe-header'
const iframe = 'iframe'
const iframeButton = '#simpleButton1'

describe('iframe test', () => {
    it('iframe test', function() {
        cy.visit(url)

        cy.get(iframeHeader).click()

        const iframeTest = cy.get(iframe)
        .its('0.contentDocument.body')
        .should('be.visible')
        .then(cy.wrap)

        iframeTest.find(iframeButton).click()
    })
})

describe('localstorage and session storage', () => {
    it('get data from local and session storage', function() {
        cy.clearAllLocalStorage()
        cy.clearAllSessionStorage()

        cy.getAllLocalStorage()
        cy.getAllSessionStorage()

        cy.setLocalStorage('test', '1')
    })
})

const urlFabrykaTestow = 'https://fabrykatestow.pl/'

describe('cookies', () => {
    it('should work with cookies', function() {
        cy.visit(urlFabrykaTestow)
        cy.clearAllCookies()
        cy.setCookie('foo', 'bar')
    })
})