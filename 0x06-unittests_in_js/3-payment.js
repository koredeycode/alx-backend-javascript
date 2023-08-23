const Utils = require('./utils');

function sendPaymentRequestToApi(totalAmount, totalsShipping) {
  const result = Utils.calculateNumber('SUM', totalAmount, totalsShipping);
  console.log(`The total is: ${result}`);
}

module.exports = sendPaymentRequestToApi;
