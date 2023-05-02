const url = 'https://jsonplaceholder.typicode.com/posts'
const put = 'https://jsonplaceholder.typicode.com/posts/1'

describe('API Method test', () => {
    it('should test json placeholder API', function(){
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

        cy.request({
            method: 'PUT',
            url: put,
            body: JSON.stringify({
                id: 1,
                title: 'foofoo',
                body: 'barBar',
                userId: 1
            }),
            headers: {'Content-type': 'application/json'}
        }).then((response) =>{
            const body = JSON.stringify(response.body)
            expect(response.status).to.eq(200)
            cy.log(body)
        })
    })
})