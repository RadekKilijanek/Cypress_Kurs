const url = 'https://jsonplaceholder.typicode.com/posts'

describe('my first scenario', () => {
    it('visit main page and click top menu button', function(){
        cy.visit('https://fabrykatestow.pl')

        cy.get('#nv-primary-navigation-main').contains('Newsletter').click()
        cy.url().should('eq', 'https://fabrykatestow.pl/ciekawostki/')
    })

    it.only('should test json placeholder API', function(){
        cy.request(url).then((response) => {
            const body = JSON.stringify(response.body)
            expect(response.status).to.eq(200)
            cy.log(body)
        })

        cy.request({
            method: 'POST',
            url: url,
            body: JSON.stringify({
                title: 'foo',
                body: 'bar',
                userId: 1
            }),
            headers: {'Content-type': 'application/json '}
        }).then((response) =>{
            const body = JSON.stringify(response.body)
            expect(response.status).to.eq(201)
            cy.log(body)
        })
    })
})