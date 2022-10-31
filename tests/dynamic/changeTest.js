"use strict";
require("should");
const {
  change,
  changeWithMemory,
  changePreCalc,
  changePreCalc2
} = require("../../lib/dynamic/change");
// spec: F(n) = F(n-1) + F(n-2), F(0) = 0, F(1) = 1

describe("calculating numberOfCoins", () => {

  [1000, 500, 100, 50, 20, 10, 5, 1].forEach((number) => {
    it(`should calculate change(${number}) to 1`, () => {
      change(number).should.eql(1);
    });

    it(`should calculate changeWithMemory(${number}) to 1`, () => {
      changeWithMemory(number).should.eql(1);
    });

    it(`should calculate changePreCalc(${number}) to 1`, () => {
      changePreCalc(number).should.eql(1);
    });

    it(`should calculate changePreCalc2(${number}) to 1`, () => {
      changePreCalc2(number).should.eql(1);
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

    it(`should calculate changeWithMemory(${input}) to ${output}`, () => {
      changeWithMemory(input).should.eql(output);
    });
    it(`should calculate changePreCalc(${input}) to ${output}`, () => {
      changePreCalc(input).should.eql(output);
    });

    it(`should calculate changePreCalc2(${input}) to ${output}`, () => {
      changePreCalc2(input).should.eql(output);
    });

  });

  describe("bigger numbers", () => {

    [
      [222, 5],
      [130, 3],
      [21, 2],
      [400, 4],
      [272, 6],
      [4611, 8],
      [99, 8],
      [1300, 4],
    ].forEach((pair) => {
      const [input, output] = pair;
      it(`should calculate changeWithMemory(${input}) to ${output}`, () => {
        changeWithMemory(input).should.eql(output);
      });

      it(`should calculate changePreCalc(${input}) to ${output}`, () => {
        changePreCalc(input).should.eql(output);
      });

      it(`should calculate changePreCalc2(${input}) to ${output}`, () => {
        changePreCalc2(input).should.eql(output);
      });
    });
  });
});
