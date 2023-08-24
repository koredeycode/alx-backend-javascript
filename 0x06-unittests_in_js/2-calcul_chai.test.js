const calculateNumber = require('./2-calcul_chai.js');
const chai = require('chai');
const expect = chai.expect;

describe('calculateNumber', function () {
  const tests = [
    { type: 'SUM', a: 2.0, b: 2.0, expected: 4 },
    { type: 'SUM', a: 2.3, b: 1.8, expected: 4 },
    { type: 'SUM', a: -2.0, b: -2.0, expected: -4 },
    { type: 'SUM', a: -2.3, b: -1.8, expected: -4 },
    { type: 'SUM', a: -2.0, b: 2.0, expected: 0 },
    { type: 'SUM', a: 2.0, b: -2.0, expected: 0 },
    { type: 'SUM', a: 0.0, b: 0.0, expected: 0 },
    { type: 'SUBTRACT', a: 2.0, b: 2.0, expected: 0 },
    { type: 'SUBTRACT', a: 2.3, b: 1.8, expected: 0 },
    { type: 'SUBTRACT', a: -2.0, b: -2.0, expected: 0 },
    { type: 'SUBTRACT', a: -2.3, b: -1.8, expected: 0 },
    { type: 'SUBTRACT', a: -2.0, b: 2.0, expected: -4.0 },
    { type: 'SUBTRACT', a: 2.0, b: -2.0, expected: 4.0 },
    { type: 'SUBTRACT', a: 0.0, b: 0.0, expected: 0 },
    { type: 'DIVIDE', a: 8.0, b: 2.0, expected: 4.0 },
    { type: 'DIVIDE', a: -7.0, b: 2.0, expected: -3.5 },
    { type: 'DIVIDE', a: 7.0, b: -2.0, expected: -3.5 },
    { type: 'DIVIDE', a: -7.0, b: -2.0, expected: 3.5 },
    { type: 'DIVIDE', a: 2.0, b: 2.0, expected: 1 },
    { type: 'DIVIDE', a: -2.0, b: -2.0, expected: 1 },
    { type: 'DIVIDE', a: 2.6, b: 3.0, expected: 1 },
    { type: 'DIVIDE', a: 2.4, b: 2.0, expected: 1 },
    { type: 'DIVIDE', a: 0.0, b: 5.0, expected: 0 },
    { type: 'DIVIDE', a: 0.0, b: -5.0, expected: -0 },
    { type: 'DIVIDE', a: 5.0, b: 0, expected: 'Error' },
    { type: 'DIVIDE', a: 5.0, b: 0.2, expected: 'Error' },
    { type: 'DIVIDE', a: 5.0, b: -0.2, expected: 'Error' },
    { type: 'DIVIDE', a: -5.0, b: 0, expected: 'Error' },
    { type: 'DIVIDE', a: -5.0, b: 0.2, expected: 'Error' },
    { type: 'DIVIDE', a: -5.0, b: -0.2, expected: 'Error' },
    { type: 'DIVIDE', a: 0.0, b: 0.0, expected: 'Error' },
  ];

  tests.forEach(({ type, a, b, expected }) => {
    it(`should correctly evaluate ${a} ${type} ${b}`, function () {
      expect(calculateNumber(type, a, b)).to.equal(expected);
    });
  });
});
