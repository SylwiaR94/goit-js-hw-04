describe('GET - API cookie', () => {
    const request = {
        method: 'GET',
        url: 'https://httpbin.org/headers',
        headers: {
            'Cookie': 'cookieName=cookieValue'
        },
        failOnStatusCode: false
    };

    it('test send cookie', () => {
        cy.request(request).then(response => {
            assert.equal(200, response.status);
            assert.equal("cookieName=cookieValue", response.requestHeaders['Cookie']);
        })
    })
})