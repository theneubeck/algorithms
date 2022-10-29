"use strict";
require("should");
const {
  change
} = require("../../lib/dynamic/change");
// spec: F(n) = F(n-1) + F(n-2), F(0) = 0, F(1) = 1

describe("fibonacci", () => {

  [1000, 500, 100, 50, 20, 10, 5, 1].forEach((number) => {
    it(`should calculate change(${number}) to 1`, () => {
      change(number).should.eql(1);
    });
  });


  [
    [3, 3],
    [15, 2],
    [22, 3],
    [13, 4],
    [2, 2],
    [4, 4],
    [27, 4],
    [9, 5],
    [8, 4],
    [13, 4],
    [1, 1],
    [0, 0]
  ].forEach((pair) => {
    const [input, output] = pair;
    it(`should calculate change(${input}) to ${output}`, () => {
      change(input).should.eql(output);
    });
  });
});
