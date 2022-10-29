"use strict";
require("should");
const {
  fibonacci,
  fibonacciWithMemory,
  fibonacciPreCalc
} = require("../../lib/dynamic/fibo");
// spec: F(n) = F(n-1) + F(n-2), F(0) = 0, F(1) = 1

describe("fibonacci", () => {

  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144].forEach((output, number) => {
    it(`should calculate fibonnaci(${number}) to ${output}`, () => {
      fibonacci(number).should.eql(output);
    });

    it(`should calculate fibonnaciWithMemory(${number}) to ${output}`, () => {
      fibonacciWithMemory(number).should.eql(output);
    });

    it(`should calculate fibonnaciPreCalc(${number}) to ${output}`, () => {
      fibonacciPreCalc(number).should.eql(output);
    });
  });
});
