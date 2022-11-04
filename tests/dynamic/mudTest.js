"use strict";
require("should");

const {
  mud
} = require("../../lib/dynamic/mud");
// spec: F(n) = F(n-1) + F(n-2), F(0) = 0, F(1) = 1

describe("Swamp traveling", () => {

  it("should handle single matrix", () => {
    const matrix = [[3]];
    mud(matrix).should.eql({
      result: 3,
      path: [[0, 0]]
    });
  });

  it("should handle 2 element vector", () => {
    const matrix = [[3, 2]];
    mud(matrix, 0).should.eql({
      result: 5,
      path: [[0, 0], [1, 0]]
    });
  });

  it("should handle vector", () => {
    const matrix = [[3, 2, 1, 4, 5]];
    mud(matrix).should.eql({
      result: 15,
      path: [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0]]
    });
  });

  it("should handle 2x2 matrix", () => {
    const matrix = [
      [1, 1],
      [2, 2]
    ];
    mud(matrix).should.eql({
      result: 2,
      path: [[0, 0], [1, 0]]
    });
  });

  it("should handle diagonal right and down in a 2x2 matrix", () => {
    const matrix = [
      [1, 2],
      [2, 1]
    ];
    mud(matrix).should.eql({
      result: 2,
      path: [[0, 0], [1, 1]]
    });
  });

  it("should handle bigger matrix", () => {
    const matrix = [
      [1, 2, 3, 4],
      [2, 1, 3, 4],
      [3, 4, 2, 4],
      [1, 1, 1, 1]
    ];
    mud(matrix).should.eql({
      result: 4,
      path: [[0, 3], [1, 3], [2, 3], [3, 3]]
    });
  });


  describe("Swamp traveling with starting point", () => {

    it("should handle single matrix", () => {
      const matrix = [[3]];
      mud(matrix, 0).should.eql({
        result: 3,
        path: [[0, 0]]
      });
    });

    it("should handle vector", () => {
      const matrix = [[3, 2, 1, 4, 5]];
      mud(matrix, 0).should.eql({
        result: 15,
        path: [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0]]
      });
    });

    it("should handle 2x2 matrix", () => {
      const matrix = [
        [1, 1],
        [2, 2]
      ];
      mud(matrix, 0).should.eql({
        result: 2,
        path: [[0, 0], [1, 0]]
      });
    });

    it("should handle bigger matrix", () => {
      const matrix = [
        [1, 2, 3, 4],
        [2, 1, 3, 4],
        [3, 4, 2, 4],
        [1, 1, 1, 1]
      ];
      const result = mud(matrix, 1);
      result.should.eql({
        result: 6,
        path: [[0, 1], [1, 1], [2, 2], [3, 3]]
      });
    });
  });
});
