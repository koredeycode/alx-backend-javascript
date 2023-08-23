const request = require('request');
const { expect } = require('chai');

describe('API integration test', () => {
  const API_URL = 'http://localhost:7865';

  it('GET / returns correct response', (done) => {
    request.get(`${API_URL}/`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome to the payment system');
      done();
    });
  });
  it('should respond with 404 for invalid path', (done) => {
    request.get(`${API_URL}/nope`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  });
  it('should respond with 200 for valid cart path', (done) => {
    request.get(`${API_URL}/cart/12`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Payment methods for cart 12');
      done();
    });
  });
  it('should respond with 200 for valid cart path', (done) => {
    request.get(`${API_URL}/cart/twelve`, (_err, res, body) => {
      // expect(res.statusCode).to.be.equal(404);
      expect(res.statusCode).to.be.greaterThanOrEqual(404);
      done();
    });
  });
  it('GET /cart/:id returns 404 response for negative number values in :id', (done) => {
    request.get(`${API_URL}/cart/-47`, (_err, res, _body) => {
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  });
});
