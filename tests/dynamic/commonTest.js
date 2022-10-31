"use strict";
require("should");
const {
  commonSubstring,
  commonSubstringPreCalc
} = require("../../lib/dynamic/common");
// spec: F(n) = F(n-1) + F(n-2), F(0) = 0, F(1) = 1

describe("longest common substring", () => {

  [
    ["", "", ""],
    ["I", "I", "I"],
    ["sub", "sub", "sub"],
    ["no", "match", ""],
    ["startat", "startfrom", "start"],
    ["weekend", "nightend", "end"],
    ["algoritm", "plagoris", "gori"],
    ["bebest", "thabest", "best"]
  ].forEach((trio) => {
    const [word1, word2, output] = trio;
    it(`should be given by commonSubstring('${word1}', '${word2}') to '${output}'`, () => {
      commonSubstring(word1, word2).should.eql(output);
    });

    it(`should be given by commonSubstringPreCalc('${word1}', '${word2}') to '${output}'`, () => {
      commonSubstringPreCalc(word1, word2).should.eql(output);
    });
  });

});
