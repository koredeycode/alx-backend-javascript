const sendPaymentRequestToApi = require('./4-payment');
const sinon = require('sinon');
const { expect } = require('chai');

describe('sendPaymentRequestToApi', function () {
  let spy;
  beforeEach(function () {
    //beforeEach
    spy = sinon.spy(console, 'log');
  });
  afterEach(function () {
    //afterEach
    spy.restore();
  });
  describe('sendPaymentRequestToApi', function () {
    it('should call console.log once', function () {
      sendPaymentRequestToApi(100, 20);
      expect(spy.calledOnceWithExactly('The total is: 120')).to.be.true;
    });
    it('should call console.log once', function () {
      sendPaymentRequestToApi(10, 10);
      expect(spy.calledOnceWithExactly('The total is: 20')).to.be.true;
    });
  });
});
