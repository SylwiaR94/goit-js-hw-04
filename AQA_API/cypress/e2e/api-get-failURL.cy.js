describe('GET - httpbin incorrect url', () => {
    const request = {
        url: 'https://httpbin.org/non-existing-url',
        failOnStatusCode: false
    };

    it('response code should be 200', () => {
        cy.request(request).then(response => {
            const status = response.status;

            assert.equal(200, status);
        })
    })
})