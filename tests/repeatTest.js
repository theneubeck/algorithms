"use strict";
require("should");

var repeat = require("../lib/repeat");
var _ = require("lodash");

describe("repeat", () => {

  [
    0,
    5,
    9,
    2,
    7,
  ].forEach((num) => {
    const expected = _.repeat(num, num).split("");
    it(`should generate range(${num},${num}) to ${expected}`, function() {
      repeat(num, num).should.eql(expected);
    });
  });

});
