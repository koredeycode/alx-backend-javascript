const calculateNumber = require('./0-calcul.js');
const assert = require('assert');

describe('calculateNumber', function () {
  const tests = [
    { a: 1.0, b: 2.0, expected: 3 },
    { a: 1.0, b: 2.4, expected: 3 },
    { a: 1.4, b: 2.4, expected: 3 },
    { a: 1.4, b: 2.0, expected: 3 },
    { a: 1.0, b: 2.5, expected: 4 },
    { a: 2.6, b: 2.5, expected: 6 },
    { a: 2.6, b: 2.0, expected: 5 },
    { a: 2.499999, b: 3.499999, expected: 5 },
    { a: 2.7, b: 3.4, expected: 6 },
    { a: 5, b: 10, expected: 15 },
    { a: -3, b: -7, expected: -10 },
    { a: 0, b: 5, expected: 5 },
    { a: 2.5, b: -1.5, expected: 2 },
  ];
  tests.forEach(({ a, b, expected }) => {
    describe(`when passed ${a} and ${b}`, function () {
      it(`should return ${expected}`, function () {
        assert.strictEqual(calculateNumber(a, b), expected);
      });
    });
  });
});
