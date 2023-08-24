const getPaymentTokenFromAPI = require('./6-payment_token.js');
const { expect } = require('chai');

describe('getPaymentTokenFromAPI', function () {
  it('should get result of function', function (done) {
    getPaymentTokenFromAPI(true).then((result) => {
      done();
      expect(result).to.eql({ data: 'Successful response from the API' });
    });
  });
});
