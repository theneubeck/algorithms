"use strict";
require("should");

const range = require("../lib/range");
const _ = require("lodash");

describe("range", () => {

  [
    [0, 10],
    [20, 100],
    [5, 5],
    [5],
  ].forEach((args) => {
    const expected = _.range(...args);
    it(`should generate ${args} to ${expected}`, () => {
      range(...args).should.eql(expected);
    });
  });

});
