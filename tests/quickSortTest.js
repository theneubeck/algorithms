"use strict";
require("should");

const quicksort = require("../lib/quicksort");

describe("quicksort", () => {

  [
    [
      [],
      []
    ],
    [
      [1],
      [1]
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
    [
      [136, 76, 352, 26, 233, 195, 39, 8, 257, 117, 5, 352, 355, 7, 328, 143, 433, 400, 323, 104, 375, 27, 90, 118, 164, 92, 123, 370, 97, 308],
      [5, 7, 8, 26, 27, 39, 76, 90, 92, 97, 104, 117, 118, 123, 136, 143, 164, 195, 233, 257, 308, 323, 328, 352, 352, 355, 370, 375, 400, 433]
    ]

  ].forEach((solution) => {
    const [list, expected] = solution;
    it(`should sort ${list} to ${expected}`, () => {
      quicksort(list).should.eql(expected);
    });
  });

});
