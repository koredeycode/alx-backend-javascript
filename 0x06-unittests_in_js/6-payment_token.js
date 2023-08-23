function getPaymentTokenFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve({ data: 'Successful response from API' });
    }
  });
}

module.exports = getPaymentTokenFromAPI;
