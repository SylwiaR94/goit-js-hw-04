describe('httpbin incorrect method', () => {
  const request = {
    method: 'GET',
    url: 'https://httpbin.org/post',
    failOnStatusCode: false
  };

  it('response code should be 405', () => {
    cy.request(request).then(response => {
      assert.equal(405, response.status);
    })
  })
})