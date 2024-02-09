describe('POST - httpbin with body', () => {
    const bodyData = {
        bodyKey: "bodyValue"
    };

    const request = {
        method: 'POST',
        url: 'https://httpbin.org/post',
        body: bodyData,
        failOnStatusCode: false
    };

    it('complex post test', () => {
        cy.request(request).then(response => {
            assert.equal(200, response.status);
            assert.notStrictEqual(bodyData, response.body.data);
        })
    })
})