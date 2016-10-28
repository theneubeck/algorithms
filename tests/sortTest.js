"use strict";
require("should");

const mergesort = require("../lib/mergesort");
const binsearch = require("../lib/binsearch");
// var _ = require("lodash");

describe("mergesort", () => {

  [
    [
      [], []
    ],
    [
      [1], [1]
    ],
    [
      [1, 2, 3],
      [1, 2, 3]
    ],
    [
      [3, 2, 1],
      [1, 2, 3]
    ],
    [
      [5, 2, 5],
      [2, 5, 5]
    ],
    [
      [5, 2, 1, 4, 6, 7, 8, 9],
      [1, 2, 4, 5, 6, 7, 8, 9]
    ],
    [
      [9, 8, 7, 6, 5, 4, 3, 2, 1],
      [1, 2, 3, 4, 5, 6, 7, 8, 9]
    ],
  ].forEach((solution) => {
    const [list, expected] = solution;
    it(`should sort ${list} to ${expected}`, () => {
      mergesort(list).should.eql(expected);
    });
  });

});

describe("binsearch", () => {

  [
    [1, [1], 0],
    [3, [1, 3], 1],
    [2, [1, 2, 3], 1],
    [3, [1, 2, 3], 2],
    [7, [1, 2, 4, 5, 6, 7, 8, 9], 5],
    [9, [1, 2, 3, 4, 5, 6, 7, 8, 9], 8],
    [2, [1, 2, 3, 4, 5, 6, 7, 8, 9], 1],
  ].forEach((solution) => {
    const [needle, list, index] = solution;
    it(`should find ${needle} in ${list} at ${index}`, () => {
      binsearch.binsearch(needle, list).should.eql(index);
    });

    it(`should find ${needle} in ${list} at ${index} (recursive)`, () => {
      binsearch.binsearchRec(needle, list).should.eql(index);
    });

  });
  [
    [1, [2], -0],
    [3, [1, 4], -1],
    [2, [1, 3, 4], -1],
    [3, [1, 2, 4], -2],
    [7, [1, 2, 4, 5, 6, 8, 9], -5],
    [9, [1, 2, 3, 4, 5, 6, 7, 8], -8],
    [2, [1, 3, 4, 5, 6, 7, 8, 9], -1],
  ].forEach((solution) => {
    const [needle, list, index] = solution;
    it(`should not find ${needle} in ${list} (${index})`, () => {
      binsearch.binsearch(needle, list).should.eql(index);
    });

    it(`should not find ${needle} in ${list} (${index}) (recursive)`, () => {
      binsearch.binsearchRec(needle, list).should.eql(index);
    });
  });
});
