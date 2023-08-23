const calculateNumber = require('./0-calcul.js');
const assert = require('assert');

describe('calculateNumber', function () {
  it('should return the sum of two rounded numbers', function () {
    // Arrange
    const a = 2.7;
    const b = 3.4;

    // Acts
    const result = calculateNumber(a, b);

    // Assert
    assert.strictEqual(result, Math.round(a) + Math.round(b));
  });

  it('should return correct result for negative numbers', function () {
    // Arrange
    const a = -5.6;
    const b = -3.1;

    // Act
    const result = calculateNumber(a, b);

    // Assert
    assert.strictEqual(result, Math.round(a) + Math.round(b));
  });

  it('should return correct result when one argument is zero', function () {
    // Arrange
    const a = 0;
    const b = 8.9;

    // Act
    const result = calculateNumber(a, b);

    // Assert
    assert.strictEqual(result, Math.round(a) + Math.round(b));
  });

  // Add more test cases as needed
});
