describe('GET - API User-Agent', () => {
    const request = {
        method: 'GET',
        url: 'https://httpbin.org/headers',
        headers: {
            'user-agent': 'My test user-agent'
        },
        failOnStatusCode: false
    };

    it('test that user-agent set correctly', () => {
        cy.request(request).then(response => {
            assert.equal(200, response.status);
            assert.equal("My test user-agent", response.requestHeaders['user-agent']);
        })
    })
})