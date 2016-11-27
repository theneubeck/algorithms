"use strict";
require("should");

const binsearch = require("../lib/binsearch");

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
    it(`should find ${needle} in [${list}] at ${index}`, () => {
      binsearch.binsearch(needle, list).should.eql(index);
    });

    it(`should find ${needle} in [${list}] at ${index} (recursive)`, () => {
      binsearch.binsearchRec(needle, list).should.eql(index);
    });

    it(`should find ${needle} in [${list}] at ${index} (while)`, () => {
      binsearch.binsearchWhile(needle, list).should.eql(index);
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
    it(`should not find ${needle} in [${list}] (${index})`, () => {
      binsearch.binsearch(needle, list).should.eql(index);
    });

    it(`should not find ${needle} in [${list}] (${index}) (recursive)`, () => {
      binsearch.binsearchRec(needle, list).should.eql(index);
    });
  });
});
