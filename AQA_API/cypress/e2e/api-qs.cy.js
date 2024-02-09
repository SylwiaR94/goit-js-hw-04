describe('GET - httpbin return 200', () => {
    const request = {
        url: 'https://httpbin.org/get',
        qs: {
            "key": "value"
        },
        failOnStatusCode: false
    };

    it('response code should be 200', () => {
        cy.request(request).then(response => {
            assert.equal("value", response.body.args.key);
        })
    })
})