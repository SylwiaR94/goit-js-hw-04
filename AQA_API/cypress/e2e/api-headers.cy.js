describe('GET - API headers', () => {
    const request = {
        method: 'GET',
        url: 'https://httpbin.org/headers',
        headers: {
            "customHeader": "customValue"
        },
        failOnStatusCode: false
    };

    it('test that header set correctly', () => {
        cy.request(request).then(response => {
            assert.equal(200, response.status);
            assert.equal("customValue", response.requestHeaders.customHeader);
        })
    })
})