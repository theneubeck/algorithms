"use strict";
require("should");

var range = require("../lib/range");
var _ = require("lodash");

describe("range", () => {

  [
    [0, 10],
    // [20, 100],
    [5, 5],
    [5],
  ].forEach((args) => {
    const expected = _.range(...args);
    it(`should generate ${args} to ${expected}`, function() {
      range(...args).should.eql(expected);
    });
  });

});
