"use strict";
require("should");

const mergesort = require("../lib/mergesort");
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
